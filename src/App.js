import React,{ useState } from 'react';
// import './App.css';
// import { List } from "./component/list";
// import { SlideBar } from "./component/slidebar";
// import Counter from "./component/ecounter";
// import MyComponent from "./component/stateclasscomponents";
// import State from './component/state'
// import Cards from './component/cards';
// import Header from "./component/Header"
// import ClassComponent from './component/classcomponent';
// import propTypes from 'prop-types';
// let a = 444;
// function ca() {
//   a =999;
//   alert(a)
//  }





function App() {
  // const email = "@yahoo.com";
  // const name = 'sanwal';
  // function showname(){
  // alert(name)
  // }
  // const object = {name  , email , showname}
  // const  arr = ["lahore" , "multan " , "fsd", "sgd" , {object} ]
  // const [a, seta] = useState(444444)
  // function ca(){
  //   seta(1242)
  // }

  const [name, setname] = useState("Sanwal")

  const  changename = (naam)=> { 
    setname(naam)
   }

  return (

    
    //   <div>
    //     <ClassComponent arr={arr} />

    // {/* <Header/> */}

    // {/* <Cards/>  */}
    //   </div>

    // <div className="App">
    //  <h1>{a}</h1>
    //  <button onClick={ca}>btn</button>
    // </div>

    <div>
      {/* <Counter /> */}

    {/* <List/> */}

    {/* <SlideBar /> */}

    {/* <MyComponent /> */}


    <div>
      <ChildComponent changename={changename} name = {name}/>
    </div>

    </div>
  );
}

function ChildComponent({name , changename}) { 
  return(
    <div>
      <p>I am {name}</p>
      <button onClick={()=> changename("Malik Sanwal") }>Update</button>
    </div>
  )
 }



// App.prototype = {
// name: propTypes.number.isRequired

// }

export default App;
