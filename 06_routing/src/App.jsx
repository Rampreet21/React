import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Songs from './page/Songs'
import Products from './page/Products'
import { Sidebar } from './components/Sidebar'
import { NotFound } from './page/NotFound'
import { Hindi , English } from './page/Hindi.jsx'
import Items from './page/Items.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/products" element = {<Products />} />
        <Route path = "/products/:id" element = {<Items />} />
        
          <Route path = "/songs" element = { <Sidebar /> }>
            <Route index element = {<Songs />} />
            <Route path = "hindi" element = {<Hindi />} />
            <Route path = "english" element = {<English />} />
          </Route>

        <Route path = "*" element = {<NotFound />} />
      </Routes>
        </div>
  )
}

export default App
