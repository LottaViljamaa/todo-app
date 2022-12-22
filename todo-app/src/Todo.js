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
    <div className="todoList">
      <div>{todo.text}</div>
      <div>#{todo.tag}</div>
      <div className="todoButtons">
      <button
        className="moveToTop"
        onClick={() => moveToTop(todos, index)}>
          Move to top
      </button>
      <button
        className="moveUp"
        onClick={() => moveUp(todos, index)}>
          &#8593;
      </button>
      <button
        className="setEdit"
        onClick={() => setEdit({id: todo.id, value: todo.text, tag: todo.tag})}>
          Edit
      </button>
      <button
        className="deleteTodo"
        onClick={() => deleteTodo(todo.id)}>
          Delete
      </button>
      <button
        className="moveDown"
        onClick={() => moveDown(todos, index)}>
          &#8595;
      </button>
      <button
      className="moveToBottom"
        onClick={() => moveToBottom(todos, index)}>
        Move to bottom
      </button>
      </div>
    </div>
  ))
}

export default Todo;