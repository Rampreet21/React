import React from "react";
import { useState } from "react";

const CartContext = React.createContext();

export default CartContext;


const Cartcontextprovider = ({children}) => {
     const [cartItems, setCartItems] = useState([]);
    
      function addToCart(product) {
        product.quantity = 1;
        if (cartItems.some(item => item.id === product.id)) {
          setCartItems(cartItems.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
        } else {
        setCartItems([...cartItems, product]);
      }
    }

    return (
           <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
          </CartContext.Provider>
    )
}   

export {Cartcontextprovider};