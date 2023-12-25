import React from "react";
function Todolist(){
    //state
    var [todos,setTodos]=React.useState(["get car","buy new house"])
    //logic
    function addTodo(){
        var nt = document.getElementById("d1").value;
        setTodos([todos,nt])
    }
    //templete
    return(
        <>
        <div className="mybox"> 
            <h1>Todolist</h1>
            <input type="text" id="d1"></input>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            <ul>
                
                    {

                        todos.map((todo,i)=>{
                          return<li key={i}>{todo}</li>
                        })
                    }
                
            </ul>
        </div>
        </>
    )
}
export default React.memo(Todolist);