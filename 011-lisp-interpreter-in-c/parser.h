#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "type.h"
#ifndef PARSER_H
#define PARSER_H
SExpression * parser (const char **tokens, size_t tokenCount, size_t *index);

#endif