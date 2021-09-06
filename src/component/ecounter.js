import { Component } from "react";

export default class Counter extends Component{

    constructor(){
        super()
        this.state ={
            name : "Sanwal"
        }
    }
    render(){
        return(
            <div>
                <h1> Class Component</h1>
                <h2> {this.state.name} </h2>

                <button onClick={()=> this.setState({name : "Khan"})}>Btn</button>
            </div>
        )
    }
}