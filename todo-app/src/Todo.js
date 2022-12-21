import React from "react";
import Todos from "./Todos"

function Todo({todos, deleteTodo}) {

  return todos.map((todo) => (
    <div>
      <div>{todo.text}</div>
      <div>#{todo.tag}</div>
      <button>Move up</button>
      <button>&#8593;</button>
      <button>Edit</button>
      <button
        onClick={() => deleteTodo(todo.id)}
        >Delete
      </button>
      <button>&#8595;</button>
      <button>Move down</button>
    </div>
  ))
}

export default Todo;