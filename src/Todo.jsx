import React from "react";
function Todo (props){



    return (
        <div>
    <>
    <li className="mybox ">
        {props.todo}

                  <button onClick={()=>{props.d(props.i)}}>Delete</button>
                  <button>Done</button>
                  <button>Undo</button>
                  </li>
    
    
    </>
        </div>
    )
}
export default React.memo(Todo);