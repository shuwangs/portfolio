#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include "tokenizer.h"

/* split each input string as individual tokens, based on space and
paratheneses ( and ) */
char **tokenize(const char *input, size_t *tokenCount) {
    size_t maxTokens = 16;
    char **tokens = malloc(maxTokens * sizeof(char *));
    if (!tokens) return NULL;
    *tokenCount = 0;

    const char *start = input;
    
    while (*start) {
        // if (strlen(start) == 0 || *tokenCount >= maxTokens) {
        //     maxTokens *= 2;
        //     tokens = realloc(tokens, maxTokens * sizeof(char *));
        //     if (!tokens) return NULL;
        // }

        if (*tokenCount >= maxTokens) {
            size_t newSize = maxTokens * 2;
            char **temp = realloc(tokens, newSize * sizeof(char *));
            if (!temp) {
                freeTokens(tokens, *tokenCount);
                return NULL;
            }
            tokens = temp;
            maxTokens = newSize;
        }
        if (isspace(*start)) {
            start++;
            continue;
        }

        if (*start == '(' || *start == ')') {
            tokens[(*tokenCount)++] = strndup(start, 1);
            start++;
        } else {
            const char *end = start;
            while (*end && !isspace(*end) && *end != '(' && *end != ')') {
                end++;
            }
            tokens[(*tokenCount)++] = strndup(start, end - start);
            start = end;
        }
        //make sure no memory leaks on failfure
        if (!tokens[*tokenCount - 1]) {
            freeTokens(tokens, *tokenCount - 1);
            return NULL;
        }
    } 

    return tokens;
}

void freeTokens(char **tokens, size_t count) {
    if (!tokens) return; // Prevent freeing NULL pointers
    for (size_t i = 0; i < count; i++) {
        if (tokens[i]) {
            free(tokens[i]);
            tokens[i] = NULL;
        }
    }
    free(tokens);
    tokens = NULL; 
}
