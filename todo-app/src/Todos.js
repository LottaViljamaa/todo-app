import React from "react";
import {useState} from "react";

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
        <h1>Edit the task</h1>
        <input
          className="todoInput"
          type="text"
          placeholder="Edit task"
          value={input}
          name="text"
          onChange={userInput}
          required
        ></input>
        
        <input
          className="tagInput"
          type="text"
          placeholder="Edit tag"
          value={tagInput}
          name="tagText"
          onChange = {(e) => setTagInput(e.target.value)}
          ></input>
        <button className="updateButton">Update</button>
      </>):
      (
        <>
      <input
        className="todoInput"
        type="text"
        placeholder="Write a new task"
        value={input}
        name="text"
        onChange={userInput}
        required
      ></input>
      
      <input
        className="tagInput"
        type="text"
        placeholder="Write a tag for the task"
        value={tagInput}
        name="tagText"
        onChange = {(e) => setTagInput(e.target.value)}
      ></input>
      <button className="addButton">Add Todos</button>
      <h1>Todos:</h1>
      </>
      )
    }
    </form>
  )
}


export default Todos;