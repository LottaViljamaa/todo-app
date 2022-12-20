import React from "react";

function Todo(todos) {

  return todos.map((todo) => (
    <div>
      <div>{todo.text}</div>
      <div>#{todo.tag}</div>
      <button>Move up</button>
      <button>&#8593;</button>
      <button>Edit</button>
      <button>Delete</button>
      <button>&#8595;</button>
      <button>Move down</button>
    </div>
  ))
}

export default Todo;