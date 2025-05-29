
# 011 - Simple PSI Interpreter in C

This project is a Phase 1 interpreter for a Lisp-inspired symbolic expression (S-expression) language, written in C.
It was developed as part of a systems programming course and includes the core components of an interpreter: tokenization, parsing, evaluation, and a REPL (Read-Evaluate-Print Loop).

---

## ✨ Features

✅ Parse and evaluate basic S-expressions  
✅ Support integer, boolean, symbol, and string types  
✅ Handle nested mathematical expressions (`+`, `-`, `*`, `/`)  
✅ Implement equality checks (`=`)  
✅ Provide error handling (e.g., division by zero, invalid input)  
✅ Modular design (separate tokenizer, parser, evaluator, and REPL modules)

---

## 🔧 Technical Highlights

- **Language:** C  
- **Core Components:**  
  - **Tokenizer:** Splits input strings into tokens based on whitespace and parentheses  
  - **Parser:** Builds S-expression trees from token streams  
  - **Evaluator:** Recursively computes results from S-expressions  
  - **REPL:** Provides an interactive interface for user input and result display

- **Key Concepts:**  
  - Memory management using pointers and dynamic allocation  
  - Recursive evaluation of nested expressions  
  - Custom data structures for symbolic processing

---

## 🖥️ How to Build & Run

```bash
gcc -o psi Main.c Repl.c Evaluator.c Parser.c Tokenizer.c Type.c
./psi
```

---

## 🧪 Example Usage

```bash
psi> (+ 1 2)
Result: 3

psi> (* 4 (+ 5 6))
Result: 44

psi> (= 18 (* 3 6))
Result: #t

psi> (/ 5 0)
Error: Division by zero.
```

To exit the interpreter, type:
```
psi> (quit)
```

---

## 🚀 Future Improvements

- Implement additional Lisp functions (e.g., `car`, `cdr`, `cons`)  
- Optimize memory usage and performance  
- Add comprehensive unit tests  
- Expand error reporting with more detailed messages

---

## 📜 License

This project was developed as a student assignment and is shared for educational purposes.

---

## 👤 Author

Shu Wang  
- M.S. Computer Science (in progress), Georgia Tech  
- GitHub: [shuwangs](https://github.com/shuwangs)
