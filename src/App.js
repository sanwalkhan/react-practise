import './App.css';
// import Cards from './component/cards';
// import Header from "./component/Header"

// import ClassComponent from './component/classcomponent';

// import propTypes from 'prop-types';

let a = 444;

function ca() { 
  a =999;
  alert(a)
 }






function App() { 

  // const email = "@yahoo.com";
// const name = 'sanwal';

// function showname(){
  // alert(name)
// }


// const object = {name  , email , showname}


// const  arr = ["lahore" , "multan " , "fsd", "sgd" , {object} ]




  return (
//   <div>
//     <ClassComponent arr={arr} />

// {/* <Header/> */}

// {/* <Cards/>  */}
//   </div>

    <div className="App">
     <h1>{a}</h1>
     <button onClick={ca}>btn</button> 
    </div>
    

  );
}


// App.prototype = {
  // name: propTypes.number.isRequired

// }

export default App;
