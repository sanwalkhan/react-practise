// import { Component } from "react";

// export default class MyComponent extends Component{

// state = {
//     cityarray : ["Karachi" , "Lahore" , "Islamabad" , "Faisalabad" , "Rawalpindi" ]
// }

// render(){
//     return(
//         <ul>
//             {
//                 this.state.cityarray.map(city=> <li key={city}> {city} </li> )
//             }
//         </ul>
//     )
// }
// }


import React from "react";
import { Component } from "react";

export default class MyComponent extends Component{
    constructor(){
        super()
        this.state = {
            date : 1
        }
    }
    

    shouldComponentUpdate(){
        console.log("should component update" , this.state.date)
        if(this.state.date < 5){
            return true;    
        }
        else{return false;}
    }
    render(){
        console.log('render');
        return(
            <div>
            <h1> Hello {this.state.date} </h1>
            <button onClick={()=> this.setState({date:this.state.date + 1})}>Btn</button>
            </div>
        )
    }
}