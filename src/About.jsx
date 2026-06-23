import React from 'react'
import { FiCheckCircle, FiTag, FiTruck, FiHeart } from 'react-icons/fi'
import AboutImg from './assets/about-cart.jpeg' 

const About = () => {
  const stats = [
    { number: '5000+', text: 'Happy Customers' },
    { number: '1000+', text: 'Products' },
    { number: '50+', text: 'Categories' },
    { number: '24/7', text: 'Support' },
  ]

  const features = [
    { icon: <FiCheckCircle />, title: 'Quality Products', desc: 'We ensure top quality' },
    { icon: <FiTag />, title: 'Best Prices', desc: 'Affordable for all' },
    { icon: <FiTruck />, title: 'Fast Delivery', desc: 'Quick to your door' },
    { icon: <FiHeart />, title: 'Customer First', desc: 'We care for you' },
  ]

  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-text">
          <span className="about-badge">About Us</span>
          <h1>We Make Shopping<br />Simple & Enjoyable</h1>
          <p>
            Zentrax is your one-stop destination for quality products at affordable prices. 
            Our mission is to deliver the best shopping experience with trust and satisfaction.
          </p>
          <button className="mission-btn">Our Mission</button>
        </div>
        <div className="about-img">
          <img src={AboutImg} alt="Shopping cart with boxes" />
        </div>
      </section>

      <section className="stats-section">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <h3>{stat.number}</h3>
            <p>{stat.text}</p>
          </div>
        ))}
      </section>

      <section className="why-section">
        <h2>Why Shop With Us?</h2>
        <div className="features-grid">
          {features.map((item, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About