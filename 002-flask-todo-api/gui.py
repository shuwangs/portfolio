import functions
import FreeSimpleGUI as sg
import time
import os

if not os.path.exists("todo.txt"):
    with open("todo.txt", "w") as file:
        pass

sg.theme('Purple')
clock = sg.Text('', key='clock')
label = sg.Text("Type in a to-do")
input_box = sg.InputText(tooltip="Enter todo", key="todo")
add_button = sg.Button(size=2, image_source="assets/add_button.png", mouseover_colors="LightBlue2",
                       tooltip="Add a todo", key="Add")
list_box = sg.Listbox(values=functions.get_todos(), key='todos',
                      enable_events=True, size=[45, 10])
edit_button = sg.Button("Edit")
delete_button = sg.Button("Delete")
exit_button = sg.Button("Exit")

layout = [[clock],
            [label],
            [input_box, add_button],
            [list_box, edit_button, delete_button],
            [exit_button]]

window = sg.Window("To-Do App",
                   layout=layout,
                   font=('Helvetica', 20))

while True:
    event, values = window.read(timeout=10)
    window["clock"].update(value=time.strftime("%b %d, %Y %H:%M:%S"))
    print(1, event)
    print(2, values)
    print(3, values["todos"])

    match event:
        case "Add":
            todos = functions.get_todos()
            new_todo = values["todo"] + "\n"
            if new_todo.strip() == "":
                sg.popup("Cannot add an empty task.")
                continue
            todos.append(new_todo)
            functions.write_todos(todos)
            window['todos'].update(values=todos)
            window['todo'].update(value="")
        case "Edit":
            try:
                todo_to_edit = values['todos'][0]
                new_todo = values["todo"]

                todos = functions.get_todos()
                index = todos.index(todo_to_edit)
                todos[index] = new_todo

                functions.write_todos(todos)
                window['todos'].update(values=todos)
            except IndexError:
                sg.popup("Please select a todo first")
                print("Please select a todo first.")
        case "Delete":
            try:
                todo_to_delete = values['todo']
                todos = functions.get_todos()
                todos.remove(todo_to_delete)
                functions.write_todos(todos)
                window['todos'].update(values=todos)
                window['todo'].update(value="")
            except:
                sg.popup("Please select a todo first.")
        case "Exit":
            break
        case "todos":
            window["todo"].update(value = values['todos'][0])

        case sg.WIN_CLOSED:
            break

window.close()