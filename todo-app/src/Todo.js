import React from "react";
import {useState} from "react";
import Todos from "./Todos"

function Todo({todos, deleteTodo, editTodo, moveToTop, moveUp, moveDown, moveToBottom}) {

  const [edit, setEdit] = useState({
    id:null,
    value: "",
    tag: ""
  });

  const acceptEdit = (value) => {
    editTodo(edit.id, value)
    setEdit({
      id:null,
      value:""
    })
  }

  if(edit.id) {
    return <Todos edit={edit} onSubmit= {acceptEdit} />
  }

  return todos.map((todo, index) => (
    <div>
      <div>{todo.text}</div>
      <div>#{todo.tag}</div>
      <button
      onClick={() => moveToTop(todos, index)}
      >Move to top</button>
      <button
        onClick={() => moveUp(todos, index)}
        >&#8593;
      </button>
      <button
        onClick={() => setEdit({id: todo.id, value: todo.text, tag: todo.tag})}
      >Edit</button>
      <button
        onClick={() => deleteTodo(todo.id)}
        >Delete
      </button>
      <button
      onClick={() => moveDown(todos, index)}
      >&#8595;</button>
      <button
        onClick={() => moveToBottom(todos, index)}
      >Move to bottom</button>
    </div>
  ))
}

export default Todo;