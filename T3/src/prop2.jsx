import {useState} from 'react';
function Prop2(props){
    return(
        <>
        <h1>Student List with prop1 data</h1>
        <ul>
            <li>Name : {props.name}</li>
            <li>Roll No : {props.roll}</li>
            <li>Marks : {props.marks}</li>
        </ul>
        </>
    )
}
export default Prop2;