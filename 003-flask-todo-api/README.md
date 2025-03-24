# 📝 Flask Todo API

This is a beginner-friendly Flask API project that provides basic task management (Todo) functionality.  
It was built as part of my transition to Software Development, to learn how backend services and REST APIs work.

---

## 🔧 Features

- ✅ Add new tasks (POST)
- 📋 View all tasks (GET)
- 🔍 View a task by ID (GET)
- ❌ Delete tasks (DELETE)
- 💾 SQLite Integration
- 🧱 Modular project structure

---

## 🚀 How to Run

1. **Clone the repo:**

```bash
git clone https://github.com/shuwangs/portfolio.git
cd portfolio/003-flask-todo-api
```

2. **(Optional) Create a virtual environment:**

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies:**

```bash
pip install -r requirements.txt
```

4. **Run the app:**

```bash
python app.py
```

Then open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## 🗂️ Project Structure

```
003-flask-todo-api/
├── app.py
├── requirements.txt
└── README.md
```

---

## 🧪 API Endpoints

### ➕ Add a new task  
`POST /add`  
Request body:
```json
{
  "task": "Walk the cat"
}
```

### 📋 Get all tasks  
`GET /tasks`

### 🔍 Get task by ID  
`GET /tasks/<id>`

### ❌ Delete task by ID  
`DELETE /tasks/<id>`

---

## 💾 SQLite Integration

### ✅ Why this matters

- Tasks are stored in a real `.db` file (`todo.db`)
- Data persists between server restarts
- You can use real SQL queries to access/modify your data

### 🧱 Database Schema

```sql
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL
);
```

This table is automatically created when the app runs.

### 🧪 Used In

All API endpoints (`/add`, `/tasks`, `/tasks/<id>`, `DELETE`) interact directly with SQLite using the `sqlite3` Python module.

### 🛡️ GitHub Tip

Be sure to exclude `todo.db` from your repo:

```txt
# .gitignore
todo.db
```

---

## 🎯 Learning Goals

- Understand the basics of web APIs and HTTP methods (GET, POST, DELETE)
- Practice Flask routing, request handling, and JSON response
- Organize backend projects in a professional, scalable way
- Apply persistent storage using SQLite

---

## 👩‍💻 Built With

- Python
- Flask

---

## ✨ About Me

I'm **Shu Wang** — a bioinformatics scientist and machine learning enthusiast, transitioning into a Software Development Engineer role.  
This project is part of my [GitHub Portfolio](https://github.com/shuwangs/portfolio).
