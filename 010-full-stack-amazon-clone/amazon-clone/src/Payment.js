import React, { use } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { NumericFormat } from 'react-number-format';
import { getBasketTotal } from './reducer';
import { useState } from 'react';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    // Hooks

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = React.useState(null);
    const [disabled, setDisabled] = React.useState(true);
    const [succeeded, setSucceeded] = React.useState(false);
    const [processing, setProcessing] = React.useState("");

    const handleSubmit = event =>{
    }
    const handleChange = event => {
        // Listen for the changes in the Card Element
        // and display any errors as the customer tpyes their card details.
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className='payment'>

            <div className='payment__container'>
            <h1>
                Chekcout (<Link to='/checkout'>{basket.length} items</Link>)
            </h1>


                { /* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className='payment__address'>
                        <p>{user ? user.email : 'Guest'}</p>
                        <p>123 React Lane</p>
                        <p>Arlington, VA 22203</p>
                    </div>

                </div>

                { /* Payment section - review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>

                    </div>

                    <div className='payment__items'>
                        {/* Map through the basket items and display them */}
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image={ item.image}
                                price={ item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>

                { /* Payment section - payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment__details'>
                        {/* Stripe payment integration would go here */}
                        {/* You can add a form for card details or integrate Stripe */}
                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange}/>


                            <div className='payment_priceContainer'>
                                <NumericFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} /// Calculate total price
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button 
                                    disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> :
                                        "Buy Now"}</span>      
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
