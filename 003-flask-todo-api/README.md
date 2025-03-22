# 📝 Flask Todo API

This is a beginner-friendly Flask API project that provides basic task management (Todo) functionality.  
It was built as part of my transition to Software Development, to learn how backend services and APIs work.

---

## 🔧 Features

- ✅ Add new tasks
- 📋 View all tasks
- ❌ Delete tasks
- 🖥️ Simple in-memory storage (or SQLite in later version)
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

### ➕ Add a new task

`POST /add`  
**Request Body:**

```json
{
  "task": "Walk the cat"
}
```

**Response:**

```json
{
  "message": "Task added!",
  "task": {
    "id": 1,
    "task": "Walk the cat"
  }
}
```

---

### 📋 Get all tasks

`GET /tasks`  
**Response:**

```json
{
  "tasks": [
    {"id": 1, "task": "Walk the cat"},
    {"id": 2, "task": "Buy milk"}
  ]
}
```

---

### 🔍 Get task by ID

`GET /tasks/<id>`  
**Response:**

```json
{
  "task": {
    "id": 1,
    "task": "Walk the cat"
  }
}
```

---

### ❌ Delete task by ID

`DELETE /tasks/<id>`  
**Response (success):**

```json
{
  "message": "Task 1 deleted."
}
```

**Response (if not found):**

```json
{
  "error": "Task not found"
}
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

