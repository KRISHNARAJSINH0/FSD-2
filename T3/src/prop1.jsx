import {useState} from 'react';
import Prop2 from './prop2.jsx';
function Prop1(){
    return(
    <>
    <Prop2 name="ABC" roll={123} marks={85} />
    <Prop2 name="PQR" roll={124} marks={92} />
    <Prop2 name="XYZ" roll={125} marks={65} />
    </>
    )
}
export default Prop1;