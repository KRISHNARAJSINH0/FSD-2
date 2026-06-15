import React,{useState} from "react";
function Count(){
    const [count,setCount] = useState(0)
    function handleCount(){
        if(count < 10 ){
        setCount(count+1)
        }
    }
    function handleDec(){
        if(count > 0){
        setCount(count-1)
        }
    }
    return(
        <>
            <h1>You clicked {count} times</h1>
            <button onClick={handleCount}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </>
    )
}
export default Count