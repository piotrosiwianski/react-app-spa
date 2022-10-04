import React from 'react';
import {Route, Routes , useLocation} from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
    // let { url } = useLocation();
    let {pathname} = useLocation();
    
    return ( 
        <div>
            <h2>Footer</h2>
                <Routes>
                 <Route path="/" exact element={<p>You are on the <span>Home Page</span></p>}/>
                 <Route path="/:id" element={<p>You are on the <span>{pathname}</span></p>}/>
                 <Route path="/product/:id" exact element={<p>You are on the <span>{pathname}</span></p>}/>
                </Routes>           
        </div>
     );
}
 
export default Footer;
