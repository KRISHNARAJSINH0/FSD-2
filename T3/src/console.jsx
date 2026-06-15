import React from "react";
function Console(){
    function handle(event){
        console.log(event.target.value)
    }
    return(
        <>
        <h1>On Change Evenet</h1>
            <center>
                <input type="text" onChange={handle}/>
            </center>
        </>
    )
}
export default Console