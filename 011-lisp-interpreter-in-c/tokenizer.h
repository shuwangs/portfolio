#include <stdio.h>
#ifndef TOKENIZER_H
#define TOKENIZER_H

// write a tokenzier function
char ** tokenize(const char *input, size_t *tokenCount);
void freeTokens(char** tokens, size_t count);

#endif
