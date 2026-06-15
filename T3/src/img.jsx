import {useState} from 'react';
import img from './assets/i1.jpg';
function Img() {
    const name = "Image Component"
    return(
        <><br />
            <h1 style={{color:'red', backgroundColor:"white",fontSize:'24px'}}>This is List Of Fruits</h1>
            <p>This is a simple demo component.{name}</p>
            <ol type='A'>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orenge</li>
            </ol>
            {/* Public Folder Image  */}
            <img src="/i2.jpg" alt="Fruit Image" style={{width:'200px',height:'200px'}}/>
            {/* Assets Folder Image  */}
            <img src={img} alt="Fruit Image" style={{width:'200px',height:'200px'}}/>
        </>
    )
}
export default Img;