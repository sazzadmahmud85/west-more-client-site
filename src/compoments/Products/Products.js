import Button from '@restart/ui/esm/Button';
import React from 'react';

import { Link } from 'react-router-dom';
import './Product.css'

const Products = ({ product }) => {
    const { title, img, dec, price, id } = product;

    return (
        <div className="product" >
            <img src={img} alt="" />
            <div>
                <h4>{title}</h4>
                <h4 style={{color: 'red'}}>$ {price}</h4>
                <p>
                    {dec.slice(0, 98)}
                </p>
                <Link to={`/booking/${id}`}>
                    <Button className="addtobag" variant="primary">Buy Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Products;