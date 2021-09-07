import React from "react";

export const List = (props) => {
  const { persons } = props;

  return (
    <div className="container">
      {persons.map((person) => (
        <div className="card text-white bg-secondary mb-3" key={person.id} style={{width :'90%'}}>
          <div className="card-header">
            <img  alt={person.name} src={person.image}/>
          </div>
          <div className="card-body">
            <h5 className="card-title"> {person.name} </h5>
            <p className="card-text"> Age : {person.age} </p>
          </div>
        </div>
      ))}
    </div>
  );
};
