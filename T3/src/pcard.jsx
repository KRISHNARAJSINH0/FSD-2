import { useState } from "react";
function Card(props){
    return(
        <>
        {props.d.map((p,i)=>(
            <div>
                <img src={p.img} width="100%"/>
                <h2>{p.title}</h2>
                <p>Price : {p.price}</p>
                <p>Rating : {p.rating}</p>
            </div>
        ))}
        </>
    )
}
export default Card