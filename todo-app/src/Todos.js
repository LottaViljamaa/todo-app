import React from "react";
import {useState} from "react";
import t from "./translations/en";

function Todos(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value: "");
  const [tagInput, setTagInput] = useState("");

  //Take user todo input
  const userInput = e => {
    setInput(e.target.value);
  }

  //Function to take user todo and tag inputs
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Date.now()/1000),
      text: input,
      tag: tagInput
    });
    setInput("");
    setTagInput("");
  }

  return(
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <h1>{t.todos.editTodo.header}</h1>
        <input
          className="todoInput"
          type="text"
          placeholder={t.todos.editTodo.editTask}
          value={input}
          name="text"
          onChange={userInput}
          required
        ></input>
        
        <input
          className="tagInput"
          type="text"
          placeholder={t.todos.editTodo.editTag}
          value={tagInput}
          name="tagText"
          onChange = {(e) => setTagInput(e.target.value)}
          ></input>
        <button className="updateButton">{t.todos.editTodo.update}</button>
      </>):
      (
        <>
      <input
        className="todoInput"
        type="text"
        placeholder={t.todos.addTask}
        value={input}
        name="text"
        onChange={userInput}
        required
      ></input>
      
      <input
        className="tagInput"
        type="text"
        placeholder={t.todos.addTag}
        value={tagInput}
        name="tagText"
        onChange = {(e) => setTagInput(e.target.value)}
      ></input>
      <button className="addButton">{t.todos.addTodo}</button>
      <h1 className="todosHeader">{t.todos.header}</h1>
      </>
      )
    }
    </form>
  )
}


export default Todos;