from flask import Flask, request, jsonify
# import sqlite3
import os

user_prompt = "Enter a todo: "
todos = []
while 1:
    user_action = input("Type add, show or exit:")
    user_action = user_action.strip()
    match user_action:
        case 'add':
            todo = input(user_prompt)
            todos.append(todo)

        case 'show':
            for index, item in enumerate(todos):
                print(f"{index + 1}-{item}")
        case 'edit':
            number = int(input("Number of the todo to edit: "))
            number -= 1
            new_todo = input("Enter new todo: ")
            todo[number] = new_todo
        case 'complete':
            number = int(input("Number of the todo to complete:"))
            todos.pop(number-1)
        case 'exit':
            break
        case _:
            print("Hey, you are using invalid workd")


# app = Flask(__name__)
# DB_FILE = 'todo.db'

# # Check if the database file exists, if not create it
# def init_db():
#     with sqlite3.connect(DB_FILE) as conn:
#         cursor = conn.cursor()
#         cursor.execute('''
#             CREATE TABLE IF NOT EXISTS tasks (
#                 id INTEGER PRIMARY KEY AUTOINCREMENT,
#                 task TEXT NOT NULL
#             )
#         ''')
#         conn.commit()


# @app.route('/')

# def home():
#     return "Flask Todo API with SQLite is running!."

# @app.route("/add", methods=['POST'])
# def add_task():
#     data = request.get_json()
#     task_content = data.get('task')

#     if not task_content:
#         return jsonify({"Error: Tasck content missing.\n"}), 400

#     with sqlite3.connect(DB_FILE) as conn:
#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO tasks(task) VALUES (?)", (task_content,))
#         task_id = cursor.lastrowid
#         conn.commit()

#     return jsonify({"message": "Task added successfully!", "task": {"id": task_id, "task":task_content}}), 201

# @app.route("/tasks", methods = ['GET'])
# def get_tasks():
#     with sqlite3.connect(DB_FILE) as conn:
#         cursor = conn.cursor()
#         cursor.execute("SELECT id, task FROM tasks")
#         rows = cursor.fetchall()

#     tasks = [{"id":row[0], "task": row[1]} for row in rows]
#     return jsonify({"tasks": tasks}), 200


# @app.route("/tasks/<int:task_id>", methods=['GET'])
# def get_task_by_id(task_id):
#     with sqlite3.connect(DB_FILE) as conn:
#         cursor = conn.cursor()
#         cursor.execute("SELECT id, task FROM tasks WHERE id = ?", (task_id,))
#         row = cursor.fetchone()
#     if row:
#         return jsonify({"task": {"id": row[0], "task": row[1]}}), 200
#     return jsonify({"message": "Task not found!"}), 404


# @app.route("/tasks/<int:task_id>", methods=['DELETE'])
# def delete_task(task_id):
#     with sqlite3.connect(DB_FILE) as conn:
#         cursor = conn.cursor()
#         cursor.execute("SELECT id, task FROM tasks WHERE id = ?", (task_id,))
#         affected = cursor.rowcount
#         conn.commit()
#         if affected:
#             return jsonify({"message": f"Task {task_id} deleted."}), 200
#         else:
#             return jsonify({"message": "Task not found!"}), 404



# if __name__ == '__main__':
#     init_db()
#     app.run(debug=True)

