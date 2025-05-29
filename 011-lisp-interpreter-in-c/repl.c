#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "parser.h"
#include "evaluator.h"
#include "tokenizer.h"
#include "type.h"

#define MAX_INPUT_SIZE 1024

void printResult(Operand *result) {
    if (!result) {
        printf("Error: Null result.\n");
        return;
    }
    switch (result->type) {
    case INT:
        printf("Result: %d\n", result->intvalue);
        break;
    case BOOL:
        printf("Result: %s\n", result->boolvalue ? "#t" : "#f");
        break;
    case SYMBOL:
        printf("Result: %s\n", result->symbolvalue);
        break;
    case STRING:
        printf("Result: %s\n", result->strvalue);
        break;
    case ERROR:
        printf("Error: %s\n", result->errorvalue);
        break;
    default:
        printf("Unknown result type.\n");
    }
}

void repl() {
    char input[MAX_INPUT_SIZE];
    // input (quit) exit the function
    printf("psi> ");
    while(fgets(input, MAX_INPUT_SIZE, stdin)) {
        if(strncmp(input, "(quit)", 6) == 0) {
            break;
        }
 

        size_t tokenCount = 0;
        char** tokens = tokenize(input,&tokenCount);
        if (!tokens) {
            printf("Error: Tokenizer failed.\n");
            printf("psi> ");
            continue;
        }

        size_t index = 0;
        SExpression *expr = parser((const char **)tokens, tokenCount, &index);
        if (!expr) {
            printf("Error: Failed to parse expression.\n");
            // freeTokens(tokens, tokenCount);
            // printf("\n");
            // continue;
        }else{
        // Evaluate the expression
            DataType *result = evaluate(expr);
            if (!result) {
                printf("Error: Null result from evaluate.\n");
            } else {
                printResult(result);
                freeOperand(result); // Free the result
            }
            freeSExpression(expr);
        }
        freeTokens(tokens, tokenCount);
        tokens = NULL;
        printf("psi> ");
       
        freeTokens (tokens, tokenCount);
    }
}
