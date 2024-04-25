"use client"
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContenxt, useShoppingCart } from "./Componentcontext";
import { Button } from './ui/button';
import Link from 'next/link';

const Example2 = () => {
  const [open, setOpen] = useState(true);
	const {closeCart,cartItems,removeFromCart,totalCart}:any = useShoppingCart();

  return (
    <Fragment>
      {/* {open && ( */}
			<div className="fixed inset-0 z-50 overflow-hidden  bg-gray-500 bg-opacity-75">
				{/*  
				<div  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
				<div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"> */}
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"> 
        				<div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-1/2 max-w-md">
              <div className="relative bg-white shadow-xl">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => {
                      setOpen(false);
                      closeCart();
                    }}
                  >
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-4">
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((product:any) => (
                      <li key={product.id} className="flex py-4">
                        {/* <img src={`/Products/${product.imageUrl}.webp`} alt={product.produitName} className="flex-shrink-0 w-24 h-24 object-cover rounded-md border border-gray-200" /> */}
                        <div className="flex flex-col justify-between ml-4">
                          <div>
                            <h3 className="text-base font-medium text-gray-900">
                              <a href="#">{product.produitName}</a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.price} DH</p>
                          </div>
                          <div className="flex justify-between items-end mt-2">
                            <p className="text-sm text-gray-500">Qty {product.quantity}</p>
                            <button
                              type="button"
                              className="text-indigo-600 hover:text-indigo-500 font-medium"
                              onClick={() => removeFromCart(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>{totalCart}</p>
                    <p>DH</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-4">
                    <Button
                      type="button"
                      className="w-full py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm"
                    >
                      Checkout
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => {
                          setOpen(false);
                          closeCart();
                        }}
                      >
                        Continue Shopping &rarr;
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
					</div>
					</div>
					</div>
      {/* )} */}
    </Fragment>
  );
};

export default Example2;
