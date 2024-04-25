"use client"

import { useShoppingCart } from "@/components/Componentcontext"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
export default function Page() {
  const {cartItems,totalCart}:any = useShoppingCart();
  const router = useRouter();

     const handleCheckout = async () => {
      // const cartItemsobjet = JSON.stringify(cartItems);
      // console.log(cartItemsobjet)
    try {   

      // const cartItemsobjet = JSON.stringify(cartItems);
      if(cartItems.length !== 0){
        const res = await axios.post("http://localhost:8800/ModifierStock",cartItems)
        if(res.data && res.data.message === 'Stock updated successfully') {
          console.log("stock Updated successfully")
          router.push("/")
        } else {
          
        }
      }
    } catch (error:any) {
      console.error('Sign-in failed:', error.response.data);


    }
  }

    

  return(
    <>
    
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Thank you for shopping with us! </p>
    <p className="text-gray-400">Before you finalize your purchase, please take a moment to review your order details below.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      {cartItems.map((product:any) => (

      
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">   
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={`/Products/${product.imageUrl}.webp`} alt={product.produitName} />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{product.produitName}</span>
          <span className="float-right text-gray-400"> <span className="text-gray-400"></span>{product.quantity}</span>
          <p className="text-lg font-bold">{product.price}DH</p>
        </div>
      </div>
      ))}
      {/* <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="mt-auto text-lg font-bold">$238.99</p>
        </div>
      </div> */}
    </div>

    {/* <p className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" >
          <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" >
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form> */}
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
 
        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">DH</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">DH</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">{totalCart}DH</p>
        </div>
    <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handleCheckout}>Place Order</button>
  </div>
</div>
      
    </>
  )
}