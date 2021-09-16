import React, { useState } from "react";

export const Form = () => {
  const [name, setname] = useState("");
  const [list, setlist] = useState([]);

  const onclickhandler = () => {
    setlist([...list,{id: list.length , task : name}]);
    setname(' ')

  };


  const DeleteItem =(id)=>{

    setlist(list.filter(name => name.id !== id))

    console.log("Delete");
  }

  return (
    <div style={{ textAlign: "center", background: "#990", padding: "100px" }}>
      <h1> Todos App </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Please Enter Your Name"
      />
      <button onClick={onclickhandler}>Add Task</button>
      {list.map((itemlist, i) => (
        <h3 key={i}> {itemlist.task}
        <button onClick={()=>DeleteItem(i)} >Delete</button>
         </h3>
      ))}
    </div>
  );
};
