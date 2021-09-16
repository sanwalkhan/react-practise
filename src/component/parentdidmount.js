import React from "react";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "anil@yahoo.com",
    };

    console.log("Sanwal");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    console.log("Rendermethod = >", this.state.email);
    return (
      <div>
        <h1>Email : {this.state.email} </h1>
        <button onClick={() => this.setState({ email: "sidhu@gmail.com" })}>
          Update
        </button>
      </div>
    );
  }
}

export default Parent;
