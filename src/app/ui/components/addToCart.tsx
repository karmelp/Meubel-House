"use client"
import React, { useState } from 'react';
import './addToCart.scss'

const AddToCart = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='add-to-cart'>
            <div className="quantity">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            
            <button className='add'>Add To Cart</button>
        </div>
    );
}

export default AddToCart