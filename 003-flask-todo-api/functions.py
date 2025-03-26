def get_todos(filepath = "todo.txt"):
    """ 
    Read a text file and return a list of to-do items. 
    """
    with open(filepath, "r") as file:
        todos_local = file.readlines()
    return todos_local

def write_todos(todo_arg, filepath = "todo.txt"):
    """ 
    Write the to-do items in to the file.
    """
    with open(filepath, "w") as file:
        file.writelines(todo_arg)
    

if __name__ == "__main__":
    print("Hello")