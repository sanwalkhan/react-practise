import { Component } from "react";


export default class ClassComponent  extends Component{
    
    render(){
        
       const { arr : [ a,b,c,d,{object :{name , email , showname }} ]  } = this.props
       const cities = [a,b,c,d]
       
       return(
           <div>          
<h3> {name} </h3>
<p> {email} </p>
<button onClick={showname}>click</button>

            {
                cities.map((city ,i ) => {
                    return(
                       <div key={i}>
                     
                       <h4> {city} </h4>
                       </div>
                    )
                })
            }

           </div>
          
       )    
    
    }
}


