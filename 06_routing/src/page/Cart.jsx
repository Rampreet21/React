import React, { useContext } from 'react'
import CartContext from './cartContext';
import { useState } from 'react';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const [items, setItems] = useState(cartItems);
  console.log(items);

  function Remove(id) {
    const updatedCart = items.filter(item => item.id !== id);
    setItems(updatedCart);
  }

  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 Your Cart</h2>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {items.map(item => (
            <div key={item.id} className="cart-card">
              
              <img 
                src={item.thumbnail} 
                alt="" 
                className="cart-image"
              />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <div style={{display:"flex"}} className=" justify-content-between align-items-center mt-3 width-100">
                  <p className="cart-total">Total: ${item.price * item.quantity}</p>
                  <button className="btn btn-danger" onClick={() => Remove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart;