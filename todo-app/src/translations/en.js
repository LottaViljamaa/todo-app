const t = {
    welcome: {
        header: "Welcome to Todo - application!",
        todos: "You can add new tasks in 'Todos' -tab.",
        manual: "You can find the manual in 'Manual' -tab",
        note: "I wish you very pleasant moments with my application!",

    },
    manual: {
        header: "Manual:",
        addTask: {
            header: "How to add task?",
            text: "You can add a new task on Todos -tab. Write your task to the left input field. To add the new task, press 'Add Todo' -button. If you want to add a tag for the tag, write the tag before adding the 'Add Todo -button.'",
        },
        addTag: {
            header: "How to add tag for the task?",
            text: "You can add a tag for your todo on Todos -tab. Write your tag to the right inpu field. Then press 'Add todo' -button to add todo and the tag to the list.            ",
        },
        editTask: {
            header: "How to edit task?",
            text: "You can edit the added todo pressing the 'Edit' -button. After editing the task, press 'Update' -button to save the changes. ",
        },
        deleteTask: {
            header: "How to delete task?            ",
            text: "You can delete the task pressing the 'Delete' -button.",
        },
        moveTask: {
            header: "How to change the position of the task?            ",
            text: "You can change the position of your task by pressing the arrow button. You can move the task to the top of the list by pressing the 'Move to the top' -button and move the task to the bottom of the list by pressing 'Move to the bottom' -button.            ",
        },
        author: {
            header: "Author: Lotta Viljamaa            ",
            text: "This application is developed as part of my studies and React course.",
        },
    
    },
    todos: {
        header: "Todos:",
        addTask: "Write a new task",
        addTag: "Write a tag for the task",
        addTodo: "Add",
        todo: {
            edit: "Edit",
            delete: "Delete",
            moveTop:"Move to top",
            moveBottom: "Move to bottom",
            moveUp: "",
            moveDown: "",
        },
        editTodo: {
            header: "Edit the task",
            editTask: "Edit the task",
            editTag: "Edit tag",
            update: "Update",
        }
    } 
}


export default t;