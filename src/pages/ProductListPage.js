import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/ProductListPage.css';

const products = ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"];

const ProductListPage = () => {

    const list = products.map(product => (
    <li key={product}>
        <NavLink to={`/product/${product}`}>{product}</NavLink>
    </li>)
)
    return ( 
        <div className="products">

            <h2>Places to see:</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
            
        </div>
     );
}
 
export default ProductListPage;