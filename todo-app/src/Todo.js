import React from "react";

function Todo(todos) {

  console.log(todos);

  return todos.map((todo) => (
    <div>
      <div>{todo.text}</div>
      <div>#{todo.tag}</div>
    </div>
  ))
}

export default Todo;