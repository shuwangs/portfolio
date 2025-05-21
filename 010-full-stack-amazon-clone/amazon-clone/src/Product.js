import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {
  const[{basket}, dispatch] = useStateValue();
  console.log('this is the basket >>>', basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    // console.log('this is a product');
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div className='product'>
      {/* products contains : a title, price, start rating, and a photo */}
      <div className='product__info'>
            <p className='product__title'>
                {title.length > 80 ? title.slice(0, 77) + "..." : title}
            </p>
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
        <button className='product__button' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;
