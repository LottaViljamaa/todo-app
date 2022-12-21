import React from "react";
import Todos from "./Todos"

function Todo({todos, deleteTodo, moveToTop, moveUp, moveDown, moveToBottom}) {

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
      <button>Edit</button>
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