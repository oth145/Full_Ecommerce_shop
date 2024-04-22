import Link from "next/link"
import { Icons } from "./Icons"
import { buttonVariants } from "./ui/button";
import NavItems from "./NavItems"


function Navbar() {
  const user = false;
return (
  //z-50 top-0 inset-x-0 h-16
   <div className="sticky z-50 top-0">
    <header className="relative bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-20">
      <div className=" border-b border-gray-200">
      <div className="flex h-16 items-center">
        {/* TOOD: Mobile nav */}
        <div className="ml-4 felx lg:ml-0">
          <Link href="/">
          <Icons.logo className="h-10 w-10"/>
          </Link>
          </div>
          <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
            <NavItems /> 
          </div>
          <div className=" ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            {user ? null : ( <div>
              <Link href="/auth/signin" className={buttonVariants({variant: "ghost"})}>
                Sign in
              </Link>
            </div> ) }
            {user ?  null : ( <span className="h-6  w-px bg-gray-200" /> )  }
            {user ? <></> : ( <div>
              <Link href="/auth/signup" className={buttonVariants({variant: "ghost"})}>
                Sign up
              </Link>
            </div> ) }
            {user ?  null : ( <span className="h-6  w-px bg-gray-200" /> )  }
            <div>
              Cart 0
            </div>
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