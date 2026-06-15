import React from "react";
function Forms(){
    function handlesubmit(e){
        e.preventDefault()
        alert("form submit")
    }
    return(
        <>
            <form onSubmit={handlesubmit}>
                <button type="submit">Click</button>
            </form>
        </>
    )
}
export default Forms