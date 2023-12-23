import React from "react";
function Counter(){
    //state
    var[count,]=React.useState(0)
    //logic
    return(
        <div  className="mybox">
            <h1>Counter:{count}</h1>
        </div>
    )
}

export default Counter;