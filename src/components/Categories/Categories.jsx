import React from 'react';
import './categories.scss'

const Categories = () => {
    return (
        <div className='Categories_Container'>
            <ul>
                <li><p className=' Categories_Name Categories_activate'>All</p></li>
                <li ><p className='Categories_Name'>Clothes</p></li>
                <li ><p className='Categories_Name'>Electronics</p></li>
                <li ><p className='Categories_Name'>Furniture</p></li>
                <li ><p className='Categories_Name'>Toys</p></li>
                <li><p className='Categories_Name'>Others</p></li>
            </ul>
        </div>
    );
};

export default Categories;