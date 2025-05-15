import React from 'react'
import './Checkout.css'
import  Subtotal from './Subtotal.js'

function Checkout() {
  return (
    <div className="checkout">  
      <div className="checkout__left">
        <img className="checkout__ad" 
        src="https://m.media-amazon.com/images/I/91+-uvqefNL._SX3000_.jpg"
        alt=""/>

        <div className="checkout__title">
          <h2>Your Shopping Basket</h2> 

          {/*BasketItem */}
          {/*BasketItem */}
          {/*BasketItem */}
          {/*BasketItem */}

        </div>

      </div>

       <div className="checkout__right">
            <Subtotal  basketCount={3} basketTotal={250.5} />
 
       </div>


    </div>
  )
}

export default Checkout
