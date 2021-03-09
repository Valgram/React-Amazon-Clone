import React from 'react';

export const ProductDetails = ({ sku, company }) => {
    return (
        <div className='container__product__details'>
            <h3>Details</h3>
            {/* <div className='product__details'>
                <span className='type'>Clasificado: </span> Mayores de 7 años
            </div> */}
            <div className='description'>
                <span className='description__title'>Company: {company}</span>
            </div>
            <div className='description'>
                <span className='description__title'>Sku: {sku} </span>
            </div>
        </div>
    );
};
