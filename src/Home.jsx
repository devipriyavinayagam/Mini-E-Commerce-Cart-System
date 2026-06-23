import React from 'react'
import './App.css'
import { FiShoppingBag, FiSearch, FiShoppingCart, FiTruck, FiShield, FiRotateCcw, FiHeadphones, FiZap, FiStar, FiArrowRight } from 'react-icons/fi'
import { FaTshirt, FaCouch, FaFutbol } from 'react-icons/fa'
import { GiLipstick } from 'react-icons/gi'

import homeimg from './assets/homeimg.png'
import Watch from './assets/watch.png'
import Shoe from './assets/shoe.png'
import Backpack from './assets/backpack.png'
import Earbuds from './assets/dress.png'
import Gift from './assets/gift.png'

const Home = () => {
  const categories = [
    { icon: <FiHeadphones size={28} />, name: 'Electronics' },
    { icon: <FaTshirt size={28} />, name: 'Fashion' },
    { icon: <FaCouch size={28} />, name: 'Home & Living' },
    { icon: <GiLipstick size={28} />, name: 'Beauty' },
    { icon: <FaFutbol size={28} />, name: 'Sports' },
  ]

  const products = [
    { img: Watch, name: 'Smart Watch', price: 1599.99, oldPrice: 1999.99, rating: 4.5 },
    { img: Shoe, name: 'Casual Shoes', price: 459.99, oldPrice: 799.99, rating: 4.2 },
    { img: Backpack, name: 'Laptop Backpack', price: 1999.99, oldPrice: 2999.99, rating: 4.6 },
    { img: Earbuds, name: 'Modern wear', price: 399.99, oldPrice: 599.99, rating: 4.3 },
  ]

  const features = [
    { icon: <FiTruck />, title: 'Free Shipping', desc: 'On orders over $50' },
    { icon: <FiShield />, title: 'Secure Payment', desc: '100% protected' },
    { icon: <FiRotateCcw />, title: 'Easy Returns', desc: '7 days return' },
    { icon: <FiHeadphones />, title: '24/7 Support', desc: 'Always here to help' },
  ]

  const bottomFeatures = [
    { icon: <FiTruck />, title: 'Fast Delivery', desc: 'Quick & Reliable' },
    { icon: <FiShield />, title: 'Best Quality', desc: 'Guaranteed' },
    { icon: <FiZap />, title: 'Great Deals', desc: 'Everyday' },
    { icon: <FiShield />, title: '100% Safe', desc: 'Secure Shopping' },
  ]

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <span className="badge">Big Deals</span>
          <h1>Find Everything<br />You Need</h1>
          <p>Quality products at best prices.<br />Shop smart, save more!</p>
          <button className="shop-btn">Shop Now <FiArrowRight /></button>
        </div>
        <div className="hero-img">
          <div className="blob-bg"></div>
          <img src={homeimg} alt="homeimg" className="homeimg" />
        </div>
      </section>

      <section className="features">
        {features.map((item, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <button className="view-all">View All</button>
        </div>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <div className="cat-icon">{cat.icon}</div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <button className="view-all">View All</button>
        </div>
        <div className="product-grid">
          {products.map((prod, i) => (
            <div key={i} className="product-card">
              <div className="product-img">
                <img src={prod.img} alt={prod.name} />
              </div>
              <h3>{prod.name}</h3>
              <div className="price">
                <span className="new-price">${prod.price}</span>
                <span className="old-price">${prod.oldPrice}</span>
              </div>
              <div className="rating">
                <FiStar className="star" />
                <span>{prod.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="offer-banner">
        <div className="offer-text">
          <span className="badge">Special Offer</span>
          <h2>Up to 30% Off</h2>
          <p>On selected items. Limited time only!</p>
          <button className="shop-btn outline">Shop Now <FiArrowRight /></button>
        </div>
        <img src={Gift} alt="gift" className="offer-img" />
      </section>

      <footer className="footer">
        {bottomFeatures.map((item, i) => (
          <div key={i} className="footer-item">
            <div className="footer-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </footer>
    </div>
  )
}

export default Home
