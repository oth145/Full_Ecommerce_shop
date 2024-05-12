"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import CheckouButton from '@/components/CheckouButton'
import {Button, buttonVariants } from './ui/button'
import Product from './ui/product'
import { useShoppingCart } from './Componentcontext';





function ComponentCategory({products}) {
    const {getItemQuantity,increaseQunatity,decreaseQunatity,removeFromCart,cartItems,cartQuantite} = useShoppingCart()
     console.log(cartItems);
     const cartItemsobjet = JSON.stringify(cartItems);
console.log(cartItemsobjet);
  return (
  <div className="container my-12 mx-auto px-4 md:px-12"> 
    <div className="flex w-full flex-wrap -mx-4"
        style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            marginLeft: "-1rem",
            marginRight: "-1rem"
        }
        }
    >

            { products &&
                products.map((product,keyid) => (
                    
                    <div key={keyid} className="my-1 px-1  md:w-1/2 lg:w-1/3  lg:my-4 lg:px-4 ">
                    <article className="overflow-hidden  rounded-lg shadow-lg">
                    <Link href={`/product/${product._id}`}>
                    <img alt="Placeholder" className="block h-auto w-full" src={`/Products/${product.imageUrl}.webp`}/>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <Link href="#" className="no-underline hover:underline text-black">
                               {product.name}
                            </Link>
                        </h1>
                        <p className="text-grey-darker text-sm">
                            {product.price} DH
                        </p>
                    </header>
                    </Link>
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <div className=' mt-auto'>
            {getItemQuantity(keyid)===0 ? (
          <Button className=' w-full' onClick={() => increaseQunatity(keyid,product.name,product.imageUrl,product.price,product._id)}   > Add to cart </Button>
            ):(
            <div className=' flex flex-grow justify-between'>
             <Button onClick={() => decreaseQunatity(keyid)} >-</Button>
            <p> <span className=' text-green-950 text-2xl'> {getItemQuantity(keyid)}</span> in cart</p>
            <Button onClick={() => increaseQunatity(keyid)} disabled={product.stock === 0} > {product.stock === 0 ? 'out of stock':'+' } </Button>
            <Button variant="destructive" onClick={()=> {removeFromCart(keyid)}}>Remove</Button>

    </div>
    )}
    </div>

                    </footer>
                </article>  
                        </div>
                ))

            }
        

</div>
     </div>
  )
}

export default ComponentCategory