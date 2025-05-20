import React from 'react'
import './CheckoutProduct.css'


function ChekoutProduct(id, image, title, price, rating) {
  return (
    <div callsName='checkoutProduct'>
        <img className = 'dheckoutProduct__image' src = {image} />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p> 
                ))}
            </div>
            <button>Remove from Basket</button>
        </div>


    </div>
  )
}

export default ChekoutProduct
