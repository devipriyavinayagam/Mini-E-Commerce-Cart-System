import React, { useState } from 'react'
import { FiShoppingBag, FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { getTotalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <FiShoppingBag className="logo-icon" />
        <span>Zentrax</span>
      </div>

      <div className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
        <Link 
          to="/" 
          className={isActive('/home') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={isActive('/about') ? 'active' : ''} 
          onClick={closeMenu}
        >
          About
        </Link>
        <Link 
          to="/product" 
          className={isActive('/product') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Product
        </Link>
        <Link 
          to="/contact" 
          className={isActive('/contact') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Contact
        </Link>
        <Link 
          to="/cart" 
          className={isActive('/cart') ? 'active' : ''} 
          onClick={closeMenu}
        >
          Cart
        </Link>
      </div>

      <div className="nav-icons">
        <FiSearch className="icon search-icon" size={20} />
        <div className="cart" onClick={() => { navigate('/cart'); closeMenu(); }}>
          <FiShoppingCart className="icon" size={20} />
          {getTotalItems() > 0 && (
            <span className="cart-badge">{getTotalItems()}</span>
          )}
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>
    </nav>
  )
}

  export default Navbar;
