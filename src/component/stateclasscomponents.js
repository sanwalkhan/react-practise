import { Component } from "react";

export default class MyComponent extends Component{

state = {
    cityarray : ["Karachi" , "Lahore" , "Islamabad" , "Faisalabad" , "Rawalpindi" ]
}

render(){
    return(
        <ul>
            {
                this.state.cityarray.map(city=> <li key={city}> {city} </li> )
            }
        </ul>
    )
}
}