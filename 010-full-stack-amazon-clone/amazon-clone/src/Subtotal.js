import React from 'react'
import './Checkout.css'
import { NumericFormat } from 'react-number-format';
function Subtotal() {
  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
                {/* Replace with the actual number of items in the basket */}
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Replace with the actual value 
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />

        <button>Proceed to Checkout</button>    
    </div>
  )
}

export default Subtotal
