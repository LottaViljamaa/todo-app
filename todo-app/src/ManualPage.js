import React from "react";
import t from "./translations/en";


function ThirdPage() { 
    return (
      <div className="manual-header">
      
      <ul className="manual">
        <h1>{t.manual.header}</h1>
        <h3>{t.manual.addTask.header}</h3>
        <li>
        {t.manual.addTask.text}</li>
        <h3>{t.manual.addTag.header}</h3>
        <li>{t.manual.addTag.text}</li>
        <h3>{t.manual.editTask.header}</h3>
        <li>{t.manual.editTask.text}</li>
        <h3>{t.manual.deleteTask.header}</h3>
        <li>{t.manual.deleteTask.text}</li>
        <h3>{t.manual.moveTask.header}</h3>
        <li>{t.manual.moveTask.text}</li>
        
      <h2>{t.manual.author.header}</h2>
      <p>{t.manual.author.text}</p>
      </ul>
    </div>
  )
}

export default ThirdPage;