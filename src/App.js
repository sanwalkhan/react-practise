import './App.css';
// import Cards from './component/cards';
// import Header from "./component/Header"

import ClassComponent from './component/classcomponent';








function App() { 

  const email = "@yahoo.com";
const name = "ahmed";

function showname(){
  alert(name)
}


const object = {name  , email , showname}

const  arr = ["lahore" , "multan " , "fsd", "sgd" , {object} ]




  return (
  <div>
    <ClassComponent arr={arr} />

{/* <Header/>

<Cards/> */}
  </div>

    

  );
}




export default App;
