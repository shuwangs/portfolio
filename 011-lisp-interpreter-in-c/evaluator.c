#include <stdlib.h>
#include <string.h>
#include "evaluator.h"
#include <stdio.h>

DataType *evaluate(SExpression * expr) {
    if(!expr|| !expr->list || expr->listSize == 0 ){
        return makeError("Empty or invalid expression");
    }
    SExpression *firstExpr = expr->list[0];
    if (!firstExpr || !firstExpr->operand) {
        return makeError("Invalid function in expression");
    } 
    
    Operand *first = firstExpr->operand;

    if (first->type != INT && expr->listSize ==1) {
        return makeInt(first->intvalue);
    } else if(first->type == SYMBOL) {
        return makeError("Non-function in function position");
    }
    if (strcmp(first->symbolvalue, "+") == 0) {
        return Add(expr);
    } else if (strcmp(first->symbolvalue, "-") == 0) {
        return Substract(expr);
    } else if (strcmp(first->symbolvalue, "*") == 0) {
        return Multiply(expr);
    } else if (strcmp(first->symbolvalue, "/") == 0) {
        return Divide(expr);
    } else if (strcmp(first->symbolvalue, "=") == 0) {
        return equalCheck(expr);
    }
    // Check the second and third elements for values or expressions
      for (int i = 1; i < 3 && i < expr->listSize; ++i) {
        SExpression *currentExpr = expr->list[i];
        if (!currentExpr || !currentExpr->operand) {
            return makeError("Missing or invalid operand");
        }
        Operand *currentOperand = currentExpr->operand;

        // Convert symbols that represent numbers into INT
        if (currentOperand->type == SYMBOL) {
            char *end;
            int value = strtol(currentOperand->symbolvalue, &end, 10);
            if (*end == '\0') { // Successful conversion
                currentExpr->operand = makeInt(value);
            } else {
                return makeError("Invalid SYMBOL in operand position");
            }
}
      }


DataType *Add(SExpression * input){
    if(!input || input->listSize != 3) {
        return makeError("Three arguments are needed.");
    }
    Operand *first_arg = evaluate(input->list[1]);
    Operand *second_arg = evaluate(input->list[2]);

    if(!first_arg || first_arg->type != INT || !second_arg || second_arg->type != INT ) {
        if (first_arg) freeOperand(first_arg);
        if (second_arg) freeOperand(second_arg);
        return makeError("Argument needed to be numeric.");
    }
    int result = first_arg->intvalue + second_arg->intvalue;
    freeOperand(first_arg);
    freeOperand(second_arg);
    // sprintf(buffer, "%d", result); // Convert integer to string

    return makeResInt(result);

};

DataType *Multiply(SExpression * input){
    if(input->listSize != 3) {
        return makeError("Three arguments are needed.");
    }
    Operand *first_arg = evaluate(input->list[1]);
    Operand *second_arg = evaluate(input->list[2]);

    if(first_arg->type != INT || second_arg != INT ) {
        freeOperand(first_arg);
        freeOperand(second_arg);
        return makeError("Argument needed to be numeric.");
    }
    int result = first_arg->intvalue * second_arg->intvalue;
    freeOperand(first_arg);
    freeOperand(second_arg);
    // sprintf(buffer, "%d", result); // Convert integer to string
    return makeResInt(result);

};

DataType *Divide(SExpression * input) {
    if(!input || input->listSize < 2) {
        return makeError("Two arguments are needed.");
    }
    if(input->listSize == 3) {
        Operand *first_arg = evaluate(input->list[1]);
        Operand *second_arg = evaluate(input->list[2]);
        if(!first_arg || first_arg->type != INT || !second_arg ||second_arg->type != INT ) {
            freeOperand(first_arg);
            freeOperand(second_arg);
            return makeError("Argument needed to be numeric.");
        }
        if(second_arg->intvalue == 0) {
            freeOperand(first_arg);
            freeOperand(second_arg);
            return makeError("Non divided Error.");
        }else{
            int result = first_arg->intvalue / second_arg->intvalue;
            freeOperand(first_arg);
            freeOperand(second_arg);
            // sprintf(buffer, "%d", result); // Convert integer to string
            return makeResInt(result);

        };
    }


DataType *Substract(SExpression * input){
    if(!input ||input->listSize < 2) {
        return makeError("Two arguments are needed.");
    }
    if(input->listSize == 2) {
        Operand *first_arg = evaluate(input->list[1]);
        if (!first_arg || first_arg->type != INT) {
            if (first_arg) freeOperand(first_arg);
            return makeError("Argument must be numeric.");
        }
        int result = - first_arg->intvalue;
        freeOperand(first_arg);
        // sprintf(buffer, "%d", result.); // Convert integer to string

        return makeResInt(result);
    }
    if(input->listSize == 3) {
        Operand *first_arg = evaluate(input->list[1]);
        Operand *second_arg = evaluate(input->list[2]);
        if(!first_arg || first_arg->type != INT || !second_arg ||second_arg->type != INT ) {
            freeOperand(first_arg);
            freeOperand(second_arg);
            return makeError("Argument needed to be numeric.");
        }
        if(second_arg->intvalue == 0) {
            freeOperand(first_arg);
            freeOperand(second_arg);
            return makeError("Non divided Error.");
        }else{
            int result = first_arg->intvalue - second_arg->intvalue;
            freeOperand(first_arg);
            freeOperand(second_arg);
            // sprintf(buffer, "%d", result); // Convert integer to string

            return makeResInt(result);
        }
        }

};

//Assign the value
DataType *equalCheck(SExpression * input){
    if(!input || input->listSize < 3) {
        return makeError("Three arguments are needed.");
    }
    if(input->listSize == 3) {
        Operand *first_arg = evaluate(input->list[1]);
        Operand *second_arg = evaluate(input->list[2]);
    if (!first_arg || first_arg->type != INT && first_arg->type != BOOL) {
        freeOperand(first_arg);
        freeOperand(second_arg);
        return makeError("First input needs to be numeric or boolean.");
    }

    if (!second_arg || second_arg->type != INT && second_arg->type != BOOL) {
        freeOperand(first_arg);
        freeOperand(second_arg);
        return makeError("Second input needs to be numeric or boolean.");
    }
    const char* res;
    if (first_arg->intvalue == second_arg->intvalue) {
        freeOperand(first_arg);
        freeOperand(second_arg);
        res =  "#t";
        return makeStr(res);
    } else{
        freeOperand(first_arg);
        freeOperand(second_arg);
        res = "#f";
        return makeStr(res);
        }

    }

};
