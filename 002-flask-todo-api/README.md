# ✅ Cross-Platform Todo App (CLI + GUI + Streamlit)

This is a personal productivity project built to practice Python application development across multiple interfaces:
- 🖥️ Command Line (CLI)
- 🪟 Graphical Interface (GUI using PySimpleGUI)
- 🌍 Streamlit Web App (deployed separately)
- ☁️ Web App (Streamlit version deployed in a 【separate folder】(https://github.com/shuwangs/todo-streamlit-app))

---

## ✨ Features

- Add / Show / Delete tasks
- Tasks stored in a simple `todo.txt` file
- Shared logic across all interfaces (modular design)
- Cross-platform support (macOS `.app`, Windows `.exe`)
- Streamlit version for online interaction

---
## 🗂️ Project Structure

```
todo-app/
├── cli.py              # Command-line interface
├── gui.py              # PySimpleGUI interface
├── web.py              # Streamlit-based API
├── functions.py        # Shared logic module
├── todo.txt            # Task storage file
└── README.md    
```

---

## 🚀 How to Run

### CLI version:
```bash
python cli.py
```

### GUI version:
```bash
python gui.py
```

### Flask Web API:
```bash
python web.py
```
API will be available at `http://localhost:5000`.

---

## ☁️ Streamlit Web App

👉 The Streamlit version of this Todo App is deployed [here](https://shuwangs-todo-streamlit-app-web-rjhrmm.streamlit.app/).

📁 Source code: [streamlit-todo-app repo](https://github.com/shuwangs/todo-streamlit-app)

---

## 💾 Data Storage

All tasks are saved in `todo.txt`.  
This ensures lightweight persistence without using a database.

---

## 🧠 Tech Stack

- Python
- PySimpleGUI
- Streamlit
- File I/O (`todo.txt` for storage)

---

## 📄 About

This project was built by Shu Wang as part of her Software Engineering learning journey.  
It demonstrates cross-interface design, modular code organization, and frontend/backend integration.

📫 [LinkedIn](https://linkedin.com/in/shuuwang) | [GitHub](https://github.com/shuwangs)

---

