# 📝 Flask Todo API

This is a beginner-friendly Flask API project that provides basic task management (Todo) functionality.  
It was built as part of my transition to Software Development, to learn how backend services and APIs work.

---

## 🔧 Features

- ✅ Add new tasks
- 📋 View all tasks
- ❌ Delete tasks
- 💾 SQLite Integration
- 🧱 Modular project structure

---

## 🚀 How to Run

1. Clone the repo:

```bash
git clone https://github.com/shuwangs/portfolio.git
cd portfolio/003-flask-todo-api
```

---
2. (Optional) Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Run the app:
```bash
python app.py
```
Then visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

##  🗂️ Project Structure
```
003-flask-todo-api/
├── app.py
├── requirements.txt
└── README.md
```

---

## 🧪 API Endpoints

## ✅ Why this matters:

- Tasks are stored in a real `.db` file (`todo.db`)
- Data won't disappear after the server restarts
- You can perform real SQL queries and build upon this foundation

### 🧱 Database Schema

```sql
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL
);
```

This table is automatically created when you run the app.

### 🧪 Where is it used?

All API operations (`/add`, `/tasks`, `/tasks/<id>`, `DELETE`) now interact directly with the SQLite database using the built-in `sqlite3` Python module.

### 🛡️ Note for GitHub

Make sure to **exclude `todo.db`** from your repository using `.gitignore`:

```txt
# .gitignore
todo.db
```

---

## 🎯 Learning Goals
- Understand the basics of web APIs and HTTP methods (GET, POST, DELETE)

- Get hands-on with Flask routing and request handling

- Learn to organize Python projects in an SDE-friendly way

---

## 👩‍💻 Built With
- Python
- Flask

---

✨ About Me
I'm Shu Wang — a bioinformatics scientist and machine learning enthusiast, transitioning into a Software Development Engineer role.
This project is part of my  [GitHub Portfolio](https://github.com/shuwangs/portfolio).

🐱 **Fun fact**: My cat Bobo was sitting next to me while I built this!

---

