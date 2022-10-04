import React from 'react';
// import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = (props) => {
    // console.log(props);
    let { id } = useParams();
    // useEffect(() => {
    //     console.log(`/product/${id}`);
    // });
    return ( 
        <>
            <div>Must see:</div>
            <Product id={id}/>
            <NavLink to={"/products"}>Back to places list</NavLink>
        </>
     );
}
 
export default ProductPage;