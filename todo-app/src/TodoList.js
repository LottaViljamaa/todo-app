import React from "react";
import {useState} from "react";
import Todo from "./Todo";
import Todos from "./Todos";

function TodoList() {
  const [todos, setTodos] = useState([]);

    //Add new todo to todolist
    const addTodo = (props) => {
      const newTodo = [props, ...todos]
      setTodos(newTodo);
    }

    //Delete todo
    const deleteTodo = id => {
      const deletetask = [...todos].filter(todo => todo.id !== id)
      setTodos(deletetask);
    }

    //Function to move task up
    const moveUp = (todos, index) => {
      const newLocation = todos.slice();
      if(index > 0) {
        newLocation[index] = todos[index-1];
        newLocation[index-1] = todos[index];
      }
      setTodos(newLocation);
    }

    //Function to move task down
    const moveDown = (todos, index) => {
      const newLocation = todos.slice();
      if(index < todos.length - 1 ) {
        newLocation[index] = todos[index + 1];
        newLocation[index + 1] = todos[index];
      }
      setTodos(newLocation)
    }


    return (
      <div>
        <Todos onSubmit={addTodo}/>
        <Todo
         todos={todos}
         deleteTodo={deleteTodo}
         moveUp = {moveUp}
         moveDown = {moveDown}
        />
      </div>
    )
}

export default TodoList;