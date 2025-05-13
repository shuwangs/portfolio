import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      {/* products contains : a title, price, start rating, and a photo */}
      <div className='product__info'>
            <p>The Lean Startup</p>
            <p className='product__price'>
            <small>$</small>
            <strong>20.07</strong>
            </p>
            <div className='product__rating'>
                <p>⭐</p>

            </div>
       </div>
       <img src="https://m.media-amazon.com/images/I/61aoOb2QEmL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="" />
        <button className='product__button'>Add to Basket</button>
    </div>
  )
}

export default Product;
