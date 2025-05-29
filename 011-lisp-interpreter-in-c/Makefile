CC = gcc
CFLAGS = -Wall -Wextra -g
SOURCES = evaluator.c main.c parser.c repl.c tokenizer.c type.c
OBJECTS = $(SOURCES:.c=.o)
EXECUTABLE = psi

all: $(EXECUTABLE)

$(EXECUTABLE): $(OBJECTS)
	$(CC) $(CFLAGS) -o $@ $(OBJECTS)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJECTS) $(EXECUTABLE)