import React, { useState } from 'react'



export const State = () => {

    const [name, setname] = useState("Sanwal")

    const [number, setnumber] = useState(21)

    const [Flag, setFlag] = useState(true)


    function updateState(){
        setname('Khan')   
        // console.log(state);
    }

    function  increment() { 
        setnumber (number + 1)
     }


    return (
        <div>
            
            <h1>Name : {name} </h1>

            <p> age : {number} </p>

            <p> student : {Flag.toString() } </p>

        <button onClick={updateState}>Update Name</button>

        <button onClick={increment}>Increment </button>

        <button onClick={()=>setFlag(!Flag)}>Change Flag</button>


        </div>
    )
}


export default State