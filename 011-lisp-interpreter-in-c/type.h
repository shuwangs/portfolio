
#include <stdio.h>
#ifndef TYPE_H
#define TYPE_H

typedef enum { INT, BOOL, SYMBOL, STRING, ERROR} DataType;

typedef struct {
    DataType type;
    union {
        int intvalue;
        int boolvalue;
        char *strvalue;
        char * symbolvalue;
        char * errorvalue;
    };
} Operand;

typedef struct SExpression {
    Operand * operand;
    struct SExpression ** list;
    size_t listSize;
} SExpression;

// data type functions

Operand * makeInt(const char *value);
Operand * makeBool(const char *value);
Operand * makeStr(const char *value);
Operand * makeSymbol(const char *value);
Operand *makeResInt(int value);
Operand * makeError(const char * error_message);
Operand *makeIntFromString(const char *str);
Operand *makeBoolFromString(const char *str);
void freeOperand(Operand *operand);
void freeSExpression(SExpression *expr);
#endif
