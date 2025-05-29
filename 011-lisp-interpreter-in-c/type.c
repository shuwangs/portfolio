#include <stdlib.h>
#include <stdio.h>
#include <errno.h>
#include <ctype.h>
#include <string.h>
#include "type.h"
Operand *makeInt(const char *value) {
    if (!value || !*value) {
        perror("Invalid input to makeInt");
        return NULL;
    }

    char *endptr;
    errno = 0; // Clear errno before conversion
    long intResult = strtol(value, &endptr, 10);

    // Check for conversion errors
    if (errno != 0 || *endptr != '\0') {
        perror("Conversion to integer failed");
        return NULL;
    }

    // Check for integer overflow/underflow
    // if (intResult < INT_MIN || intResult > INT_MAX) {
    //     fprintf(stderr, "Error: Integer overflow or underflow in makeInt.\n");
    //     return NULL;
    // }

    // Allocate and populate the Operand
    Operand *operand = malloc(sizeof(Operand));
    if (!operand) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    operand->type = INT;
    operand->intvalue = (int)intResult;

    // Debug: Print the converted value
    //printf("Debug: Successfully converted '%s' to integer %d\n", value, operand->intvalue);

    return operand;
}
Operand *makeResInt(int value) {

    // Allocate and populate the Operand
    Operand *operand = malloc(sizeof(Operand));
    if (!operand) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    operand->type = INT;
    operand->intvalue = value;

    // Debug: Print the converted value
    // printf("Debug: Successfully converted '%s' to integer %d\n", value, operand->intvalue);

    return operand;
}
// Operand * makeInt(int value){
//     Operand *operand = malloc(sizeof(Operand));
//     if (!operand) {
//         perror("Memory allocation failed");
//         exit(EXIT_FAILURE);
//     }
//     operand->type = INT;
//     operand->intvalue = value;
//     return operand;
// }
Operand * makeBool(const char *value){
    Operand *operand = malloc(sizeof(Operand));
    if (!value) {
        perror("Invalid input to makeSymbol");
        exit(EXIT_FAILURE);
    }
    operand->type = BOOL;
    operand->boolvalue = value ? 1: 0;
    return operand;

};
Operand * makeSymbol(const char *value){
    if (!value) {
        perror("Invalid input to makeSymbol");
        exit(EXIT_FAILURE);
    }
    Operand *operand = malloc(sizeof(Operand));
    if (!operand) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    operand->type = SYMBOL;
    operand->symbolvalue = strdup(value);
    if (!operand->symbolvalue) {
        free(operand);
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    return operand; 
};
Operand * makeStr(const char *value){
    Operand *operand = malloc(sizeof(Operand));
    if (!operand) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
        }
    operand->type = STRING;
    operand->strvalue = strdup(value);
    return operand; 
};
Operand * makeError(const char * error){
    Operand *operand = malloc(sizeof(Operand));
    if (!operand) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    if (!operand) {
        perror("Failed to allocate memory for DataType");
        exit(EXIT_FAILURE);
    }
    operand->type = ERROR;
    operand->errorvalue = strdup(error);
    return operand;
};

void freeOperand(Operand *operand){
    if(!operand) {
        return;
    }
    if(operand->type == SYMBOL || operand->type == ERROR) {
        free(operand->symbolvalue);
    }
    operand = NULL;

};
void freeSExpression(SExpression *expr){
    if(!expr) return;
    if(expr->operand) {
        freeOperand(expr->operand);
    }
    if(expr->list) {
        for(size_t i = 0; i <expr->listSize; i++) {
            freeSExpression(expr->list[i]);
        }
        free(expr->list);
    }
    free(expr);
    expr = NULL;
};

// Helper functions for creating operands
Operand *makeIntFromString(const char *str) {
    char *end;
    int value = strtol(str, &end, 10);
    if (*end != '\0') {
        return makeError("Invalid integer string");
    }
    Operand *operand = (Operand *)malloc(sizeof(Operand));
    operand->type = INT;
    operand->intvalue = value;
    return operand;
}

Operand *makeBoolFromString(const char *str) {
    Operand *operand = (Operand *)malloc(sizeof(Operand));
    if (strcmp(str, "#t") == 0) {
        operand->type = BOOL;
        operand->boolvalue = 1;
    } else if (strcmp(str, "#f") == 0) {
        operand->type = BOOL;
        operand->boolvalue = 0;
    } else {
        free(operand);
        return makeError("Invalid boolean string");
    }
    return operand;
}
