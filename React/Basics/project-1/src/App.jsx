import React, { Component, useEffect, useState } from "react";
import Card from "./Day 1/Components/Card";
import CardDetails from "./Day 1/Components/CardDetails";
import ToggleButton from "./Day 2/ToggleButton";
import ToggleBulb from "./Day 2/ToggleBulb";
import UseEffectHook from "./Day 2/UseEffectHook";

// class based component
// export default class C1 extends Component{
//     render(){
//         return <h1>Hello React</h1>
//     }
// }

// function based component
// let C1 = () =>{
//     let name="username";
//     return(
//         <div>
//             <label htmlFor="">Enter Your Details</label>
//             <input type="text" />
//             <br />
//             <h1 style={{color:"burlywood", backgroundColor:"cadetblue"}} className="heading">Hello {name} React from functional component</h1>
//             <h3>Another heading</h3>
//         </div>
//     )
// }
// export default C1;

// const App = () => {
//     let carddata1 = "card 1 data"
//     let carddata2 = "card 2 data"
//     let carddata3 = "card 3 data"
//   return (
//     <div>
//         <Card passedData = {carddata1}/>
//         <Card passedData = {carddata2}/>
//         <Card passedData = {carddata3}/>
//     </div>
//   )
// }

// export default App

// const App = () => {
  //   let user1 = {id:101, name:"username 1", city:"city 1"}
  //   let user2 = {id:102, name:"username 2", city:"city 2"}
  //   let user3 = {id:103, name:"username 3", city:"city 3"}
  // return (
  //   <div className="main-container">
  //       <Card passedData = {user1}/>
  //       <Card passedData = {user2}/>
  //       <Card passedData = {user3}/>
  //   </div>
  // )
// }

// const App = () => {
//   return(
//     <CardDetails/>
//   )
// }
// export default App


// const App = () => {

//   let normalVariable = 10;
//   const [stateVariable, setStateVariable] = useState(20);

//   let handleNormal = ()=>{
//     normalVariable += 5;
//   }
//   let handleState = ()=>{
//     let x = stateVariable;
//     x += 5;
//     setStateVariable(x);
//   }
//   return (
//     <div>
//       <h1>Normal variable: {normalVariable}</h1>
//       <h1>State variable: {stateVariable}</h1>

//       <button onClick={handleNormal}>Set Normal Variable</button>
//       <button onClick={handleState}>Set State Variable</button>
//     </div>
//   )
// }

// counter
// const App = () => {
//   const [stateVariable, setStateVariable] = useState(20);

//   let stateDecrease = ()=>{
//     setStateVariable(prev => prev-1);
//   }
//   let stateIncrease = ()=>{
//     setStateVariable(prev => prev+1);
//   }
//   return (
//     <div>
//       <h1>Current State variable: {stateVariable}</h1>

//       <button onClick={stateDecrease}>Decrease State Variable</button>
//       <button onClick={stateIncrease}>Increase State Variable</button>
//     </div>
//   )
// }
// export default App

// password show-hide button
// let current = true;
// const App = () => {
//   const [show, setShow] = useState("text");
//   const [action, setAction] = useState("show");

//   let handleShow = ()=>{
//     setShow("text");
//     setAction("Hide");
//     current = !current;
//   }
//   let handleHide = ()=>{
//     setShow("password");
//     setAction("Show");
//     current = !current;
//   }


//   return (
//     <div>
//       <input type={show} />
//       {/* <button onClick={handleShow}>Show</button>
//       <button onClick={handleHide}>Hide</button> */}
//       <i class="fa-solid fa-eye"></i>
//       <i class="fa-regular fa-eye"></i>
//       <button onClick={current ? handleShow : handleHide}>{action} </button>
//     </div>
//   )
// }
// export default App

const App = () => {
  return (
    <ToggleButton/>
    // <ToggleBulb/>
    // <UseEffectHook/>
  )
}
export default App