import React from "react";
import Todos from "./Todos"

function Todo({todos, deleteTodo, moveUp, moveDown}) {

  return todos.map((todo, index) => (
    <div>
      <div>{todo.text}</div>
      <div>#{todo.tag}</div>
      <button>Move up</button>
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
      <button>Move down</button>
    </div>
  ))
}

export default Todo;