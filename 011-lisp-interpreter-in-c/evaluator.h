#ifndef EVALUATOR_H
#define EVALUATOR_H
#include "type.h"

//check the expression types: numeric or operatior 
DataType *evaluate(SExpression *expr);

DataType *Add(SExpression * input);
DataType *Substract(SExpression * input);
DataType *Multiply(SExpression * input);
DataType *Divide(SExpression * input);

//Assign the value
DataType *equalCheck(SExpression * input);

#endif



