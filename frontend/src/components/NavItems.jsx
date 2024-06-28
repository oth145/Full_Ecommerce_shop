"use client";
import { useEffect,useState,useRef } from "react";
import axios from "axios";
import Navitem from "./Navitem";


const Navitems =  () => {
  const [activeIndex,setActivEindex] = useState(null);
  const [categoriesProducts,setcategoriesProducts] = useState([]);
  useEffect(() => {
    const FetchCategories = async () => {
      try {
      const res = await axios.get('http://localhost:8800/categoriesProductsName');
      setcategoriesProducts(res.data)
          return console.log(res.data);
      } catch (error) {
          console.log('Sign-in failed:', error)
      }
      };
      FetchCategories();
  }, [])
  const isAnyOpen  = (activeIndex !== null);


return(
  <div className="flex gap-4 h-full items-center ">
      {categoriesProducts.map((categorieProduct,key) => {
          const handleOpen = () => {
            if(activeIndex === key) {
              setActivEindex(null)
            } else {
              setActivEindex(key)
            }
          }
        const isOpen = (activeIndex === key)
        return(
          
          <Navitem key={key} categorieProduct={categorieProduct} isOpen={isOpen} handleOpen={handleOpen} isAnyOpen={isAnyOpen} />
        )
      })}
  </div>
)

}

export default Navitems

