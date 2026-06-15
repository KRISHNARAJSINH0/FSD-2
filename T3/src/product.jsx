import React from "react";
function Product(props){
    return (
        <>
        {props.data.map((d)=>(
            <div>
                <img src={d.pic} style={{width:"100px",height:"100px"}}/>
                <p>Name : {d.name}</p>
                <p>Price : {d.price}</p>
            </div>
        ))}
        </>
    )
}
export default Product