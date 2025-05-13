import React from 'react'
import './Product.css'

function Product({title, price, rating, image}) {
  return (
    <div className='product'>
      {/* products contains : a title, price, start rating, and a photo */}
      <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className='product__rating'>
            {/* rating is a number from 1 to 5 */}
            {Array(rating).fill().map((_, i) => (
                <p>⭐</p> ))
            }


            </div>
       </div>
       <img src={image} alt="" />
        <button className='product__button'>Add to Basket</button>
    </div>
  )
}

export default Product;
