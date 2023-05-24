import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
  <div className='checkout'>
    <div className='checkout__left'>
      <img  className='checkout__ad' src='https://www.socialseo.com/wp-content/uploads/2021/01/AMAZON-MARKETING-ADDITIONAL-BANNERS-01-1024x241.png' alt='' />
          <div className='checkout__title'>
             <h1> this your basket</h1>
          </div>
    </div>


    <div className='checkout__right'>
      <Subtotal/>
    </div>
    
    
    
    
  </div>
  )
}

export default Checkout