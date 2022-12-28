import React from "react";


function ThirdPage() { 
    return (
      <div className="manual-header">
      
      <ul className="manual">
        <h1>Manual:</h1>
        <h3>How to add task?</h3>
        <li>
          You can add a new task on Todos -tab. Write your task to the left input field. To add the new task, press "Add Todo" -button. If you want to add a tag for the tag, write the tag before adding the "Add Todo -button."
        </li>
        <h3>How to add tag for the task?</h3>
        <li>
          You can add a tag for your todo on Todos -tab. Write your tag to the right inpu field. 
          Then press "Add todo" -button to add todo and the tag to the list.
        </li>
        <h3>How to edit task?</h3>
        <li>
          You can edit the added todo pressinf the "Edit" -button. After editing the task, prss "Update" -button to save the changes.
        </li>
        <h3>How to delete task?</h3>
        <li>
          You can delete the task pressing the "Delete" -button."
        </li>
        <h3>How to change the position of the task?</h3>
        <li>
          You can change the position of your task by pressing the arrow button. 
          You can move the task to the top of the list by pressing the "Move to the top" -button 
          and move the task to the bottom of the list by pressing "Move to the bottom" -button. 
        </li>
        
      <h2>Author: Lotta Viljamaa</h2>
      <p>This application is developed as part of my studies and React course.</p>
      </ul>
    </div>
  )
}

export default ThirdPage;