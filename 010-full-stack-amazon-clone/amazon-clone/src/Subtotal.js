import React from 'react'
import './Subtotal.css'
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';



function Subtotal() {
  const[{basket}, dispatch] = useStateValue();
  const basketCount = basket.length; 
  const basketTotal = basket.reduce((total, item) => total + item.price, 0).toFixed(2); // Assuming each item has a price property

  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
                {/* Replace with the actual number of items in the basket */}
              Subtotal ({basketCount} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal} // Replace with the actual value 
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />

        <button>Proceed to Checkout</button>    
    </div>
  )
}

export default Subtotal
