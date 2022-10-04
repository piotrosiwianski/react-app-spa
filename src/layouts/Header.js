import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/Header.css';

import img1 from '../images/header1.jpeg';
import img2 from '../images/header2.jpeg';
import img3 from '../images/header3.jpeg';



const Header = () => {

    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() * 3);
    // const img = images[index];
    
    return (
        <>
            <Routes>
                <Route path="/" exact element={<img src={img1} alt='city'/>}/>
                <Route path="/products" element={<img src={img2} alt='city'/>}/>
                <Route path="/contact" element={<img src={img3} alt='city'/>}/>
                <Route path="/admin" element={<img src={img1} alt='city'/>}/>
                <Route path="*" element={<img src={img1} alt='city'/>}/>
            </Routes>
            {/* <Routes>
                <Route path="*" element={<img src={img} alt="city"/>}/>
            </Routes> */}
        </>
     );
}
 
export default Header;
