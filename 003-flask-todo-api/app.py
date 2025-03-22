from flask import Flask, request, jsonify

app = Flask(__name__)

# Use a global list to mimic the database
todos = []
# add id to the list
next_id = 1


@app.route('/')

def home():
    return "Hello, Flask! Welcome to my app."

@app.route("/add", methods=['POST'])
def add_task():

    global next_id
    data = request.get_json()
    task_content = data.get('task')

    if not task_content:
        return jsonify({"Error: Tasck content missing.\n"}), 400

    # Assign the task with a unique ID
    task = {"id":next_id, "task": task_content}
    todos.append(task)
    next_id += 1  # Increment the ID for the next task
    return jsonify({"message": "Task added successfully!", "task": task}), 201

@app.route("/tasks", methods = ['GET'])
def get_tasks():
    return jsonify({"tasks": todos}), 200


@app.route("/tasks/<int:task_id>", methods=['GET'])
def get_task_by_id(task_id):
    for task in todos:
        if task['id'] == task_id:
            return jsonify({"task": task}), 200
    return jsonify({"error": "Task not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)

