import React, { useEffect, useState,useRef } from 'react';
import {buttonVariants,Button } from './ui/button'
import { Input } from './ui/input';
import { useShoppingCart } from './Componentcontext';


function CheckouButton({keyid,product}) {
const {getItemQuantity,increaseQunatity,decreaseQunatity,removeFromCart,cartItems,cartQuantite} = useShoppingCart()
const quantity = getItemQuantity(keyid);
 console.log(keyid);
 console.log(cartItems);
//  console.log(cartQuantite);
 console.log(product);
  return (
    <div className=' mt-auto'>
        {quantity===0 ? (
      <Button className=' w-full' onClick={() => increaseQunatity(keyid)} > Add to cart </Button>
    ):(
      <div className=' flex flex-grow justify-between'>
      <Button onClick={() => decreaseQunatity(keyid)} >-</Button>
      <p> <span className=' text-green-950 text-2xl'> {quantity}</span> in cart</p>
      <Button onClick={() => increaseQunatity(keyid)} >+</Button>
      <Button variant="destructive" onClick={()=> {removeFromCart(keyid)}}>Remove</Button>

    </div>
    )}
    </div>
    
    // <div className=' flex flex-grow justify-between'>
    //   <Button onClick={() => decreaseQunatity(keyid)} >-</Button>
    //   <p> <span className=' text-green-950 text-2xl'> {quantity}</span> in cart</p>
    //   <Button onClick={() => increaseQunatity(keyid)} >+</Button>
    //   {/* <Button variant="secondary" disabled>Disabled</Button> */}
    //    {/* <Button variant="secondary" disabled>Disabled</Button> */}
    //    <Button variant="destructive" onClick={ () => setAddToCart(true) }>Remove </Button>

    // </div>
  )
}

export default CheckouButton