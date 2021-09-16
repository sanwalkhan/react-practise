import React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "sidhu@gmail.com",
    };
    console.log(props.count)
    console.log("Sanwal");
  }
  componentDidUpdate(preprops, prestate, snapshot) {
    if (prestate.data === this.state.date) {
      console.log("Both states are equal ");
    }
    console.log("Component did update :", prestate);
    console.log(preprops);
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
