# from functions import get_todos, write_todos
import functions
import time

now = time.strftime("%b %m-%d-%Y %H:%M:%S")
print(f"It is {now}")

while 1:
    user_action = input("Type add, show, edit, delete or exit:")
    user_action = user_action.strip()

    if user_action.startswith('add'):
        todo = user_action[4:]

        todos = functions.get_todos()

        # Append the newly added todo
        todos.append(todo + "\n")

        # Open the file again to overwrite with the new todos
        functions.write_todos(todos)


    elif user_action.startswith('show'):
        todos = functions.get_todos()

        for index, item in enumerate(todos):
            item = item.strip("\n")
            row = f"{index + 1}-{item}"
            print(row)

    elif user_action.startswith('edit'):
        try:
            number = int(user_action[5:])
            print(number)
            number -= 1

            todos = functions.get_todos()

            new_todo = input("Enter new todo: ")
            todos[number] = new_todo + "\n" # Add '\n' to be consistent with rest W

            functions.write_todos(todos)

        except ValueError:
            print("Your command is not valid.")
            continue

    elif user_action.startswith('delete'):
        try:
            number = int(user_action[7:])

            todos = functions.get_todos()

            rm_todo = todos.pop(number-1)

            functions.write_todos(todos)

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

