import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from './home'
import Shop from './shop'
import Contact from './contact'
import NoPage from './nopage'
function My(){
    return(
        <>
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/shop" element={<Shop/>}/>
                <Route path ="/contact" element={<Contact/>}/>
                <Route path ="*" element={<NoPage/>}/>
            </Routes>
            </Router>
        </>
    )
}
export default My 