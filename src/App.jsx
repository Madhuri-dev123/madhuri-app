import React from 'react';
import './App.css';
import Todolist from './Todolist';
function App() {
  console.log("first line")
  function abc(){
    console.log("abc")
    setC(234);
  }
  var [c,setC]=React.useState(1)
  return (
    <div className="mybox">
      <h1>Welcom to ReactJs</h1>
      <h1>{c}</h1>
      <button onClick={()=>{abc()}} >increment</button>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
