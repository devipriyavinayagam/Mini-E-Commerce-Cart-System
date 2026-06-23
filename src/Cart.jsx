import React from 'react'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import { useCart } from './CartContext'  
import { Link } from 'react-router'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to get started!</p>
        <Link to="/product" className="shop-now-btn">Shop Now</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">₹{item.price.toLocaleString('en-IN')}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <FiMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <FiPlus />
                </button>
              </div>
              <div className="item-total">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <Link to="/product" className="continue-shopping">Continue Shopping</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart