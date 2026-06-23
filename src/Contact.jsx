import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    alert('Message Sent! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <span className="contact-label">Contact Us</span>
          <h1>We're Here to Help</h1>
          <p className="contact-desc">
            Have a question or need support?<br />
            Reach out to us anytime.
          </p>

          <div className="info-item">
            <div>
              <h4><span className='info-icon'><FiMail /></span> Email</h4>
              <p>support@Zentrax.com</p>
            </div>
          </div>

          <div className="info-item">
            <div>
              <h4><span className='info-icon'><FiPhone /></span> Phone</h4>
              <p>+91 976 532 8910</p>
            </div>
          </div>

          <div className="info-item">
            <div>
              <h4><span className='info-icon'><FiMapPin /></span> Address</h4>
              <p>123 Senthazhini Street,<br />Chennai, Tamil Nadu 600119</p>
            </div>
          </div>

          <div className="info-item">
            <div>
              <h4><span className='info-icon'><FiClock /></span> Business Hours</h4>
              <p>Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Type your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.865993649838!2d80.27040631482257!3d13.043074890812345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzM1LjEiTiA4MMKwMTYnMTkuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '15px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zentrax Location"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact