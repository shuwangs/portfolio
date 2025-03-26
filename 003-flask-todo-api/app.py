
# import sqlite3
import os

user_prompt = "Enter a todo: "

while 1:
    user_action = input("Type add, show, edit, delete or exit:")
    user_action = user_action.strip()

    if user_action.startswith('add'):
        todo = user_action[4:]

        with open('todo.txt', "r") as file:
            todos = file.readlines()

        # Append the newly added todo
        todos.append(todo + "\n")

        # Open the file again to overwrite with the new todos
        with open('todo.txt', "w") as file:
            file.writelines(todos)

    elif user_action.startswith('show'):
        with open('todo.txt', "r") as file:
            todos = file.readlines()

        for index, item in enumerate(todos):
            item = item.strip("\n")
            row = f"{index + 1}-{item}"
            print(row)

    elif user_action.startswith('edit'):
        try:
            number = int(user_action[5:])
            print(number)
            number -= 1

            with open('todo.txt', "r") as file:
                todos = file.readlines()
                # print("Here is the todos existing.", todos)

            new_todo = input("Enter new todo: ")
            todos[number] = new_todo + "\n" # Add '\n' to be consistent with rest W

            with open('todo.txt', "w") as file:
                file.writelines(todos)

        except ValueError:
            print("Your command is not valid.")
            continue

    elif user_action.startswith('delete'):
        try:
            number = int(user_action[7:])

            with open("todo.txt", "r") as file:
                todos = file.readlines()

            rm_todo = todos.pop(number-1)

            with open("todo.txt", "w") as file:
                file.writelines(todos)

            message = f"Todo: {rm_todo} was removed from the list. "
            print(message)
        except IndexError:
            print("There is no item with that number")
            continue
    elif user_action.startswith('exit'):
        print('Bye')
        break

    else:
        print("Hey, command is invalid.")


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

