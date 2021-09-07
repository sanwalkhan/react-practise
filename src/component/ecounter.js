import { Component } from "react";

export default class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      name : "sanwal",
      count : 1
    }
    this.name = props.a
    console.log(this)
  }

  showName(e){
    e.setState({count: e.state.count + 1 , name : "Sanwal Khan "})
    console.log(e);
  }

  render(){
    return(
      <div>
        <h1> {this.state.name} </h1>

        <button onClick={()=> this.showName(this) }>Btn</button>

        <h1> {this.state.count} </h1>

        <button onClick={()=> this.setState({count: this.state.count + 1 , name : "Khan" })}>Inc </button>
      </div>
    )
  }
}