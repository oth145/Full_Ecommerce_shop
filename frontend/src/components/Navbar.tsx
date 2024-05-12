"use client"
import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants,Button } from "./ui/button";
import NavItems from "./NavItems"
import { ShoppingCart, LogOut } from "lucide-react";
import { ShoppingCartContenxt, useShoppingCart } from "./Componentcontext";
// import { useContext } from "react";
import Example from "@/components/slide";
import Cookies from "js-cookie";
// import SideBar2 from "./slide2";
import Example2 from "./slide2";
import { useEffect } from "react";

 


function Navbar() { 
  useEffect(() => {
    const token:any = Cookies.get('key-set')
    console.log(token)
    if (token) {
      const tokenData:any = JSON.parse(token)
      console.log(tokenData)
      settestUser({...testUser,nameUser:tokenData.username,emailUser:tokenData.email,check:true});
    }
  },[])
  const {openCart,closeCart ,cartQuantite,isOpen,cartItems,testUser,settestUser}:any  = useShoppingCart();
  const user = false;
return (
  //z-50 top-0 inset-x-0 h-16
   <div className="sticky z-50 top-0">
    <header className="relative  bg-primary-lightDark">
      <div className="mx-auto w-full max-w-screen-xl px-20">
      <div className=" border-b border-gray-200">
      <div className="flex h-16 items-center">
        {/* TOOD: Mobile nav */}
        <div className="ml-4 felx lg:ml-0">
          <Link href="/">
          {/* <Icons.logo className="h-10 w-10"/> */}
          <img src="/nav/icons/MicrosoftTeams-image_24_.webp" alt="PAUL" className=" mt-2 h-10" />
          </Link>
          </div>
          <div className="lg:ml-8 lg:block lg:self-stretch">
            <NavItems /> 
          </div>
          <div className=" ml-auto flex items-center">
          <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            {(testUser.check) ? 
              <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase  text-green-700">
              {testUser.nameUser}</h4>
             : ( <div>
              <Link href="/auth/signup" className={buttonVariants({variant: "ghost"})}>
                Sign up
              </Link>
            </div> ) }
            <span className="h-6  w-px bg-gray-200" />

               {(testUser.check) ? (
                <Button variant="destructive" onClick={() => {
                  Cookies.remove('key-set');
                  settestUser({...testUser,check:false,nameUser:null,emailUser:null})
                }}>
                  <LogOut className="w-5/6" />
                </Button>
               ) : ( <div>
                 <Link href="/auth/signin" className={buttonVariants({variant: "ghost"})}>
                   Sign in
                 </Link>
               </div> ) }
             <span className="h-6  w-px bg-gray-200" /> 
            {isOpen ? (  
            <Example />
            ) : (
              <div>
              <Link onClick={() => openCart()} href="#" className="relative"> 
              <div className="h-12 w-12 flex items-center justify-center rounded-full
                 bg-green-100 text-green-900
                ">
                  <ShoppingCart className="w-1/3 h-1/3 relative"/>
              </div>
              <div className="absolute  rounded-full w-1/3  text-black font-bold top-4 text-3xl   left-9"> 
              {cartQuantite}
               </div>

                </Link>
            </div>
             ) 
              } 
          </div>
        </div>
      </div>
      </div>
      </div>
      
    </header>
  </div>
)
}

export default Navbar