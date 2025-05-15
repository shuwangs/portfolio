import React from 'react'
import './Subtotal.css'
import { NumericFormat } from 'react-number-format';
function Subtotal({baskketCount, basketTotal}) {
  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
                {/* Replace with the actual number of items in the basket */}
              Subtotal ({baskketCount} items): <strong>{value}</strong>
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
