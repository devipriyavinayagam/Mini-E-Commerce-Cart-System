import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from "./Home.jsx"
import About from './About.jsx'
import Contact from './Contact.jsx'
import Product from './Product.jsx'
import Cart from './Cart.jsx'
import { CartProvider } from './CartContext'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <h1>Hello Everyone</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )

}

export default App;

