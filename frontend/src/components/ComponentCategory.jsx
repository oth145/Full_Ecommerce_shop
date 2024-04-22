import Link from 'next/link'
import React from 'react'
import {buttonVariants } from './ui/button'
import Product from './ui/product'
import { FileX } from 'lucide-react'



function ComponentCategory({products}) {
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
                products.map((product) => (
                    <div className="my-1 px-1  md:w-1/2 lg:w-1/3  lg:my-4 lg:px-4 ">

                    <article className="overflow-hidden  rounded-lg shadow-lg">
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
    
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link href="#" className={buttonVariants()}>
                        Add to cart
                    </Link>
                    </footer>
                </article>  
                        </div>
                ))

            }
        

</div>
    // </div>
  )
}

export default ComponentCategory