import { useState } from "react";

function Button(){
    function handleClick(){
        alert("Welcome to LJKU")
    }
    const DCE = (event) =>{
        alert("Welcome to LJKU With Double click")
    }
    return (
        <>
        <center>
            <button style={{backgroundColor:'red',padding:'10px',borderRadius:'10px'}} onClick={handleClick}>Click ME</button>
            <button style={{backgroundColor:'red',padding:'10px',borderRadius:'10px'}} onDoubleClick={DCE}>Click Double</button>
            </center>
        </>
    )
}
export default Button