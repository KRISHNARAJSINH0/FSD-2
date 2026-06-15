import {useState} from 'react';

function Demo() {
    const name = "LJKU"
    const Roll = "123456789"
    return(
        <>
            <h1>This is demo</h1>
            <p>This is a simple demo component.{name}</p>
            <p>{name}</p>
            <p>"{Roll}"</p>
            <p>{name+[1,5,6,4].join('.')}</p>

        </>
    )
    }
export default Demo;
