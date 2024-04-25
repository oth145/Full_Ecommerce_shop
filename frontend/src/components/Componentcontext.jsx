'use client';
import { createContext, useContext, useState } from "react";

export const ShoppingCartContenxt = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContenxt)
}

export function ShoppingCartProvider( {children} ) {
  const [cartItems,setcatrItems] = useState([])
  const [isOpen,setisOpen] = useState(false);

  const [testUser,settestUser] = useState({});

 const openCart = () => setisOpen(true)
 const closeCart = () => setisOpen(false)
  function getItemQuantity(id) {
    return cartItems.find(Item => Item.id === id)?.quantity || 0
  }
  function increaseQunatity(id,productname,imageUrl,price,idProduit) {
    setcatrItems(curritems => {
      if(curritems.find(item => item.id === id ) == null) {
        return [...curritems,{id,quantity: 1,produitName:productname,imageUrl:imageUrl,price:price,idProduit:idProduit}]
      } else {
        return curritems.map((item) => {
            if(item.id == id) {
              return {...item, quantity: item.quantity+1}
            } else {
              return item
            }
          })
      }
    })
  }
  function decreaseQunatity(id) {
    setcatrItems(curritems => {
      if(curritems.find(item => item.id === id)?.quantity === 1 ) {
        return curritems.filter(item => item.id !== id)
      } else {
        return curritems.map((item) => {
            if(item.id == id) {
              return {...item, quantity: item.quantity-1}
            } else {
              return item
            }
          })
      }
    })
  }
  function removeFromCart(id) {
    setcatrItems(curritems => {
      return curritems.filter(item => item.id !== id) 
    })
  }
  const cartQuantite = cartItems.reduce((total, item) => {
    const quantity = parseInt(item.quantity);
    if (!isNaN(quantity)) {
      return total + quantity;
    } else {
      console.error('Invalid quantity for item:', item);
      return total;
    }
  }, 0);
  const totalCart = cartItems.reduce((total, item) => {
    const quantity = parseFloat(item.quantity*item.price);
    const quantityF = parseFloat(quantity.toFixed(3))
    if (!isNaN(quantityF)) {
      return total + quantityF;
    } else {
      console.error('Invalid quantity for item:', item);
      return total;
    }
  }, 0);
  // function TotalCart() {
  //     const cartItems.reduce()
  // }
  return(
    <ShoppingCartContenxt.Provider value={{getItemQuantity,increaseQunatity,decreaseQunatity,removeFromCart,cartItems,cartQuantite,openCart,closeCart,isOpen,totalCart,testUser,settestUser}}>    
        {children}
    </ShoppingCartContenxt.Provider>
  )
}