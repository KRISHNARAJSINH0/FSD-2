import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from './home'
import Product from './product'
import NoPage from './nopage'
import img1 from './assets/i1.jpg'
import img2 from './assets/i2.jpg'
function Fmain(){
    const info = [  {name:"p1",price:20000, pic:img1},
                    {name:"p2",price:14000,pic:img2}
                ]
    return (
        <>
            <Router>
                <ul>
                    <li><Link to= '/'>Home</Link></li>
                    <li><Link to= '/product'>Product</Link></li>
                </ul>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product data = {info}/>}/>
                <Route path='*' element={<NoPage/>}/>
            </Routes>
            </Router>
        </>
    )
}
export default Fmain