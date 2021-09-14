import React, { useState } from "react";

export const Form = () => {
  const [name, setname] = useState("");
  const [list, setlist] = useState([]);

  const onclickhandler = () => {
    setlist([...list, name]);
    setname("");
  };

  return (
    <div style={{ textAlign: "center", background: "#990", padding: "100px" }}>
     

      <h1> {name} </h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Please Enter Your Name"
      />

      <button onClick={onclickhandler}>Add Task</button>

      {list.map((itemlist, i) => (
        <h3 key={i}> {itemlist} </h3>
      ))}
    
    </div>
  );
};
