import { useState } from "react";
import Pcard from './pcard.jsx'
import Img1 from './assets/i2.jpg'
import img2 from './assets/i1.jpg';

function List(){
    const data = [
        {title:"ABC",price:123,rating:5,img:Img1},
        {title:"XYZ",price:456,rating:9,img:img2},
    ]
    return (
        <>
        <h1>Our Products</h1>
        <Pcard d = {data}/>
        </>
    )
}
export default List