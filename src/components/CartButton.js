import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { useCartContext } from '../context/CartContext';

const CartButton = () => {
    const { total_items } = useCartContext();
    return (
        <div className='shopping__container'>
            <div className='icon__container'>
                <Link to='/CartPage'>
                    <ShoppingBasketOutlinedIcon style={{ fontSize: '30', color: 'white' }} />
                </Link>
            </div>
            <div>{total_items}</div>
        </div>
    );
};

export default CartButton;
