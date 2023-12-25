import React from "react";

import Todo from "./Todo";
function Todolist(){
    //state
    var [todos,setTodos]=React.useState([
                                 "get car",
                                 "get New House",
                                 "bring vegtables",
                                  "new bick",
                                  "new boll"
                                ])

        //logic

        function deleteTodo(i){
            var temp =[...todos];
            temp.splice(i,1);
            setTodos([...temp])
        }
    return( 
        <div>
            <h1>Todolist</h1>
            <input type="text"></input>
            <ul>
                {
                    todos.map((todo,i)=>{
                  return<Todo todo={todo}d={deleteTodo}i={i}></Todo>
                    })
                }
            </ul>
        </div>
    )
}



export default Todolist;


