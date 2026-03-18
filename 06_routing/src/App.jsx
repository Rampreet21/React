import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import CartItems from './page/Cart.jsx'
import Products from './page/Products'

import { NotFound } from './page/NotFound'
import Items from './page/Items.jsx'
import { useState } from 'react'

function App() {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Items addToCart={addToCart} />} />
        <Route path="/cart" element={<CartItems cartItems={cartItems} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
