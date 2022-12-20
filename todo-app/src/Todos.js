import React from "react";
import {useState} from "react";

function Todos(props) {

  const [input, setInput] = useState();
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
      <input
      type="text"
      placeholder="Write a new task"
      value={input}
      name="text"
      onChange={userInput}
      required
      ></input>

      <input
      type="text"
      placeholder="Write a tag for the todo"
      value={tagInput}
      onChange = {(e) => setTagInput(e.target.value)}
      ></input>
      <button>Add Todo</button>
    </form>
  )
}


export default Todos;