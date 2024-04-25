"use client"
import React, { useState,useEffect } from 'react'
import {Button} from '../../../components/ui/button'
import axios from 'axios';

interface Product {
  category: string;
  description: string;
  imageUrl: string;
  name: string;
  price: string;
  stock: number;
  _id: string;
}
function Page({params}:any) {
const [product,setproduct] = useState<Product|null>(null);
  useEffect(() => {
    const FetchProduct = async () => {
      try {
      const res = await axios.get(`http://localhost:8800/product/${params.idProduct}`);
      setproduct(res.data)
          return console.log(res.data);
      } catch (error) {
          console.log('Sign-in failed:', error)
      }
      };
      FetchProduct();
  }, [])

  console.log(params.idProduct)
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden  bg-blend-normal text-white shadow-lg bg-clip-border rounded-xl  shadow-blue-gray-500/40">
    <img
      src={`/Products/${product?.imageUrl}.webp`}
      alt="card-image" className=" w-auto"  />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {product?.name}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      {product?.description}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero delectus rerum repellat, sequi commodi laborum debitis aut quas cupiditate consequatur dolorum blanditiis eveniet distinctio repudiandae ipsam reprehenderit. Voluptates, atque reiciendis?
    </p>
  </div>
  <div className="p-6 pt-0">
    <Button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </Button>
  </div>
</div>
</div>  
  )
}

export default Page