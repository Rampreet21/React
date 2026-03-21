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


const App = () => {

 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Items  /> }/> 
        <Route path="/cart" element={<CartItems  />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
