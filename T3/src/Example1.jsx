import {useState} from 'react';
import Example from './Example.jsx';
function Example1(){
    const details = {Student_name:"ABC",University_name:"LJKU"}
    return(
    <>
    <Example data={details}/>
    </>
    )}
export default Example1