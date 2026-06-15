import React, { useReducer } from 'react' 

const initialState=0; 
function reducer(state,action){ 
    if(action.type==='increment'){ 
        return state+1; 
    } 
    if(action.type==='decrement'){ 
        return state-1; 
    } 
} 
function UR1(){ 
    const[state,dispatch] = useReducer(reducer,initialState); 
    return( 
        <> 
            <h1>{state}</h1> 
            <button onClick={()=> dispatch({type:"increment"})}> Increment </button> 
            <button onClick={()=>dispatch({type:"decrement"})}> Decrement </button> 
        </> 
    ) 
} 
export default UR1