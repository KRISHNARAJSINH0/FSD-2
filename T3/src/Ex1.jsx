import {useState} from 'react';
function Student(){
    const list = [
        {id:1,name:'ABC',std: 10},
        {id:2,name:'PQR',std: 12},
        {id:3,name:'XYZ',std: 11},
    ]
    return(
        <>
       {list.filter((list) => list.std === 11).map((list)=>
        (<div key={list.id}>
            <h2>Student Name : {list.name.toUpperCase()}</h2>
            <h3>Student Standard : {list.std+1}</h3>
        </div>))}
        </>
    )
}
export default Student;