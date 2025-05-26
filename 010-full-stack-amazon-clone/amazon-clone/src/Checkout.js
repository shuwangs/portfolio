import React from 'react'
import './Checkout.css'
import  Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">  
      <div className="checkout__left">
        <img className="checkout__ad" 
        src="https://m.media-amazon.com/images/I/91+-uvqefNL._SX3000_.jpg"
        alt=""/>

        <div className="checkout__title">
          <h3>Hello {user? user.email.split('@')[0] : 'Guest'}</h3>
          <h2>Your Shopping Basket</h2> 
      
          {basket.map(item => (
            <CheckoutProduct
            id = {item.id}
            image = {item.image}
            title = {item.title}
            price = {item.price}
            rating = {item.rating}
            />
          ))}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}

        </div>

      </div>

       <div className="checkout__right">
            <Subtotal  basketCount={3} basketTotal={250.5} />
 
       </div>


    </div>
  )
}

export default Checkout
