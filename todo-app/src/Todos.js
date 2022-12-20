import React from "react";
import {useState} from "react";

function Todos(props) {

  const [input, setInput] = useState();
  const [tagInput, setTagInput] = useState("");

  //Takes user input
  const userInput = e => {
    setInput(e.target.value);
  }

  return(
    <div>
      <input
      type="text"
      placeholder="Write a new task"
      value={input}
      name="text"
      onChange={userInput}
      required
      ></input>
    </div>
  )
}


export default Todos;