import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import './card-block.css';

export const CardBlock = () => {
    return (
        <div className="cart-block">
            <AiOutlineShoppingCart size={25} className='cart-block__icon'/>
            <span className="cart-block__total-price">0</span>
        </div>
    )
}