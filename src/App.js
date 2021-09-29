import { useEffect, useState } from "react";

function App() { 

  const [num, setnum] = useState(0)
  const [nam, setnam] = useState(10)

  useEffect(() => {
    console.log("Useeffect..................");
  }, [nam] )

  useEffect(() =>{
    console.log("Useeffecttttt");
  } , [num] )
    return (
      <div>
        <h1> {num} </h1>
        <h1>
          {nam}
        </h1>
      <button onClick={ ()=> setnum(num + 1) } >Btn</button>

      <button onClick={ ()=> setnam(nam - 1) } >Btn2</button>

      </div>
    
  )
    };



 export default App