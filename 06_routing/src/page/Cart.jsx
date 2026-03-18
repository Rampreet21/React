import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";

const CartItems = ({ cartItems }) => {

  const [items, setItems] = useState(cartItems);

  // Increase quantity
  const increaseQty = (index) => {
    const updated = [...items];
    updated[index].qty += 1;
    setItems(updated);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const updated = [...items];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setItems(updated);
    }
  };

  // Remove item
  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  // Total price
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      
      <h2>
        <TiShoppingCart size={28} /> Shopping Cart
      </h2>

      {items.length === 0 ? (
        <p>Your cart is empty 😢</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={index} style={styles.card}>
              
              <img src={item.thumbnail} alt="" style={styles.img} />

              <div style={styles.info}>
                <h4>{item.title}</h4>
                <p>${item.price}</p>

                {/* Quantity */}
                <div>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.qty}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>

                {/* Remove */}
                <button 
                  onClick={() => removeItem(index)} 
                  style={styles.remove}
                >
                  Remove ❌
                </button>
              </div>

            </div>
          ))}

          {/* Total */}
          <h3 style={styles.total}>
            Total: ${total.toFixed(2)}
          </h3>
        </>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "30px auto",
    padding: "20px"
  },

  card: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px"
  },

  img: {
    width: "100px",
    height: "100px",
    objectFit: "contain"
  },

  info: {
    flex: 1
  },

  remove: {
    marginTop: "10px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  },

  total: {
    marginTop: "20px",
    textAlign: "right"
  }
};

export default CartItems;
