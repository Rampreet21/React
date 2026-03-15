import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/products">Products</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/songs">Songs</Link>
    </li>
  </ul>
</nav>
  )
}

export default Navbar