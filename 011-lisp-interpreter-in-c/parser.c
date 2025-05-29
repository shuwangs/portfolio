
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include "type.h"
#include "parser.h"
#include "tokenizer.h"

SExpression *parser(const char **tokens, size_t tokenCount, size_t *index) {
    if (*index >= tokenCount) {
        return NULL;
    }

    const char *token = tokens[*index];
    (*index)++;

    if (strcmp(token, "(") == 0) {
        // Parse a list
        SExpression *expr = malloc(sizeof(SExpression));
        if (!expr) {
            perror("Failed to allocate memory for SExpression");
            exit(EXIT_FAILURE);
        }
        expr->operand = NULL;
        expr->listSize = 0;
        expr->list = NULL;

        while (*index < tokenCount && strcmp(tokens[*index], ")") != 0) {
            SExpression *subExpr = parser(tokens, tokenCount, index);
            if (!subExpr) {
                freeSExpression(expr);
                return NULL;
            }

            SExpression **newList = realloc(expr->list, (expr->listSize + 1) * sizeof(SExpression *));
            if (!newList) {
                freeSExpression(expr);
                perror("Failed to allocate memory for SExpression list");
                exit(EXIT_FAILURE);
            }

            expr->list = newList;
            expr->list[expr->listSize++] = subExpr;
        }

        // Ensure the list ends with a closing parenthesis
        if (*index >= tokenCount || strcmp(tokens[*index], ")") != 0) {
            freeSExpression(expr);
            return NULL;
        }

        (*index)++; // Skip closing parenthesis
        return expr;
    } else if (isdigit(token[0]) || (token[0] == '-' && isdigit(token[1]))) {
        // Parse an integer
        // Operand *operand = makeInt(atol(token));
        Operand *operand = makeInt(token);
        if (!operand) {
            perror("Failed to allocate memory for integer operand");
            exit(EXIT_FAILURE);
        }
        SExpression *expr = malloc(sizeof(SExpression));
        if (!expr) {
            perror("Failed to allocate memory for SExpression");
            exit(EXIT_FAILURE);
        }
        expr->operand = operand;
        expr->list = NULL;
        expr->listSize = 0;
        return expr;
    } else if (strcmp(token, "#t") == 0 || strcmp(token, "#f") == 0) {
        // Parse a boolean
        int boolValue = strcmp(token, "#t") == 0; 
        Operand *operand = makeBool(&boolValue);
        if (!operand) {
            perror("Failed to allocate memory for boolean operand");
            exit(EXIT_FAILURE);
        }
        SExpression *expr = malloc(sizeof(SExpression));
        if (!expr) {
            perror("Failed to allocate memory for SExpression");
            exit(EXIT_FAILURE);
        }
        expr->operand = operand;
        expr->list = NULL;
        expr->listSize = 0;
        return expr;
    } else {
        // Parse a symbol
        Operand *operand = makeSymbol(token);
        if (!operand) {
            perror("Failed to allocate memory for symbol operand");
            exit(EXIT_FAILURE);
        }
        SExpression *expr = malloc(sizeof(SExpression));
        if (!expr) {
            perror("Failed to allocate memory for SExpression");
            exit(EXIT_FAILURE);
        }
        expr->operand = operand;
        expr->list = NULL;
        expr->listSize = 0;
        return expr;
    }
}
