import React from 'react'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Products {
  category: string;
  description: string;
  imageUrl: string;
  name: string;
  price: string;
  stock: number;
  _id: string;
}
interface categorieProduct {
  name: string;
  imageUrl: string
  products: Products[];
}
interface navitemsProps {
  categorieProduct: categorieProduct
  handleOpen: () => void
  isOpen: Boolean
  isAnyOpen: Boolean

}

function Navitem({categorieProduct,isOpen,handleOpen,isAnyOpen} : navitemsProps) {
  return<div className='flex'>
      <div className='flex items-center z-40 '>
         <Button  className=' gap-1.5' onClick={handleOpen} variant={isOpen ? 'secondary': 'ghost'}>
          {categorieProduct.name}
          <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground',
        {'-rotate-180':isOpen})} />
         </Button>
      </div>  
      {/*' px-3 text-left top-full text-sm text-muted-foreground'
      // className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4">
        // flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors
      */}
    {isOpen ?(
    <div className={cn( "items-center text-sm transition-color" , {
      'animate-in fade-in-10 slide-in-from-top-5':!isAnyOpen,
    })}>
               <div className=' absolute top-16  rounded-lg border z-20  shadow-2xl  bg-primary-lightDark '>
            {categorieProduct.products.map((product) => (
              <div key={product._id} className=' group relative text-base '>
              <Link href={`/product/${product._id}`} className="mt-1 block font-medium text-gray-900 overflow-hidden  group-hover:bg-primary-light">
                -{product.name}
              </Link>
              
              </div>
            ))}
         </div>
        
      <div>
      </div>
      </div>): null
    } 
      </div>
  
  
}

export default Navitem