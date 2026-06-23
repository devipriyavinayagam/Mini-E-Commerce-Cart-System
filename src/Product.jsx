import React, { useState } from 'react'
import { FiSearch, FiShoppingCart, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext.jsx'

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('Newest')
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UY1000_.jpg',
      name: 'iPhone 14 Pro',
      rating: 5,
      reviews: 128,
      price: 89999,
      oldPrice: null
    },
    {
      id: 2,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://static.vecteezy.com/system/resources/thumbnails/040/324/210/small_2x/ai-generated-kids-dress-isolated-on-transparent-background-free-png.png',
      name: 'Fancy frock',
      rating: 5,
      reviews: 96,
      price: 1999,
      oldPrice: 2999
    },
    {
      id: 3,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg',
      name: 'Laptop',
      rating: 4,
      reviews: 78,
      price: 45999,
      oldPrice: null
    },
    {
      id: 4,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://thf.bing.com/th/id/OIP.W6xuyieXFCJ-uUN6s8aR7QHaE8?w=290&h=193&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'Shoe',
      rating: 5,
      reviews: 52,
      price: 1299,
      oldPrice: 2499
    },
    {
      id: 5,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://www.sukumart.com/images/2023/10/Frame-33872-9.jpg',
      name: 'Smart Watch',
      rating: 4,
      reviews: 110,
      price: 799,
      oldPrice: null
    },
    {
      id: 6,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://thf.bing.com/th/id/R.55440cbfed2a9271969162f9ab5af958?rik=J0urcGJ%2fE7pIQA&riu=http%3a%2f%2fglobalnewsonnetwork.com%2fwp-content%2fuploads%2f2023%2f04%2fPrestige-Endura-1000-Juicer-Mixer-Grinder-4-Jars-Black-Silver-1536x1152.jpg&ehk=1e9%2f6XFMQa5oN4SSY6cRtQZB0ivSQdyZfAQKpmMD%2b48%3d&risl=&pid=ImgRaw&r=0',
      name: 'Mixer Grinder',
      rating: 5,
      reviews: 75,
      price: 4599,
      oldPrice: 7999
    },
    {
      id: 7,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://thf.bing.com/th/id/OIP.Nfn0CYYmuoT_NrFjQmuLiAHaJg?w=154&h=199&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'Teddy Bear',
      rating: 4.9,
      reviews: 78,
      price: 899,
      oldPrice: null
    },
    {
      id: 8,
      badge: null,
      img: 'https://tse4.mm.bing.net/th/id/OIP.c5TLvSFZTLSTUhjycrKhvAHaHa?r=0&cb=thfc1falcon2&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3',
      name: 'Wireless Earbuds',
      rating: 5,
      reviews: 40,
      price: 2999,
      oldPrice: null
    },
    {
      id: 9,
      badge: null,
      img: 'https://m.media-amazon.com/images/I/91y9IrbmrTL.jpg',
      name: 'Watercolour Painting',
      rating: 4.3,
      reviews: 40,
      price: 3599,
      oldPrice: null
    },
    {
      id: 10,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://img.freepik.com/premium-photo/single-lipstick-isolated-white-background_941600-88532.jpg',
      name: 'Lipstick',
      rating: 4.6,
      reviews: 67,
      price: 599,
      oldPrice: null
    },
    {
      id: 11,
      badge: null,
      img: 'https://thf.bing.com/th/id/OIP.zmybsrIM0T_G0hT1t0QVxQHaHa?w=216&h=216&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'Handbag',
      rating: 5,
      reviews: 90,
      price: 1299,
      oldPrice: null
    },
    {
      id: 12,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://thf.bing.com/th/id/OIP.08X6frv_0Ve_5GRqVVeUIAHaE6?w=242&h=180&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'TV',
      rating: 3.9,
      reviews: 49,
      price: 2999,
      oldPrice: null
    },
    {
      id: 13,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://5.imimg.com/data5/SELLER/Default/2024/1/376075364/QY/GH/EN/152034781/cello-puro-steel-x-benz-900-water-bottle-1000x1000.jpg',
      name: 'Water Bottle',
      rating: 3.8,
      reviews: 70,
      price: 349,
      oldPrice: null
    },
    {
      id: 14,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://thf.bing.com/th/id/OIP.Wil6IZHnm66uKc1ZO9tBQQHaF7?w=255&h=204&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'T-Shirts',
      rating: 4.9,
      reviews: 78,
      price: 599,
      oldPrice: null
    },
    {
      id: 15,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://reetifashions.com/wp-content/uploads/2019/09/RF19_TD_12.jpeg',
      name: 'Jewellery set',
      rating: 3.6,
      reviews: 69,
      price: 1299,
      oldPrice: 2599
    },
    {
      id: 16,
      badge: 'null',
      img: 'data:image/webp;base64,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',
      name: 'Umberalla',
      rating: 4.8,
      reviews: 98,
      price: 399,
      oldPrice: null
    },
    {
      id: 17,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://www.bing.com/th/id/OIP.E2KzLGz3OADm2F2ssWuOOwHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      name: 'HeadPhone',
      rating: 3.6,
      reviews: 70,
      price: 2049,
      oldPrice: null
    },
    {
      id: 18,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlquZPcGJBffmKsQWa-f4E1ugr73SkmT3oxryp0Jq9J4gpbm45L005bIG&s=10',
      name: 'Luggage',
      rating: 4.0,
      reviews: 20,
      price: 4549,
      oldPrice: 5500
    },
    {
      id: 19,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://thf.bing.com/th/id/OIP.XSNRXh7QwkTnK_bBczoY6gAAAA?w=209&h=183&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'Makeup Kit',
      rating: 4.6,
      reviews: 50,
      price: 2599,
      oldPrice: 2999
    },
    {
      id: 20,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://thf.bing.com/th/id/OIP.l9Z85wxv_PU5II2085XeyQHaFw?w=270&h=210&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'Earnings',
      rating: 4.8,
      reviews: 80,
      price: 199,
      oldPrice: 299
    },
    {
      id: 21,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKhWzAawcJd2tse7O5OzfS1WlHbvU2_i5nUsiQTe1kA&s',
      name: 'School Bag',
      rating: 3.8,
      reviews: 63,
      price: 789,
      oldPrice: null
    },
    {
      id: 22,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36y8cYuaP7mLkQDhN9yaVxepAA7fJVPdL2_kqq0LJhA&s',
      name: 'Mini Table fan',
      rating: 3.5,
      reviews: 45,
      price: 3599,
      oldPrice: 3999
    },
    {
      id: 23,
      badge: 'New',
      badgeColor: 'green',
      img: 'https://www.bing.com/th/id/OIP.zNgHuvBlpy9QyzXMVse1xwHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      name: 'Wooden Spoon Stand',
      rating: 4.0,
      reviews: 25,
      price: 679,
      oldPrice: null
    },
    {
      id: 24,
      badge: 'Sale',
      badgeColor: 'red',
      img: 'data:image/webp;base64,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',
      name: 'NoteBooks',
      rating: 4.6,
      reviews: 87,
      price: 99,
      oldPrice: 159
    },
    {
      id: 25,
      badge: 'Old',
      badgeColor: 'green',
      img: 'https://thf.bing.com/th/id/OIP.XkLLJX6Qi4ZzXbnqUFKxFQHaEf?w=268&h=180&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3',
      name: 'Sports Ball',
      rating: 4.1,
      reviews: 50,
      price: 399,
      oldPrice: 499
    },
    {
      id: 26,
      badge: 'New',
      badgeColor: 'red',
      img: 'https://www.rasoishop.com/cdn/shop/files/CSOFFST101ORNG0001-7.jpg?v=1709651524&width=1445',
      name: 'Tiffen Box',
      rating: 3.9,
      reviews: 55,
      price: 350,
      oldPrice: 499
    },
    {
      id: 27,
      badge: null,
      img: 'https://modarta.in/cdn/shop/products/IMG_0282.jpg?v=1632850684',
      name: 'Shawl',
      rating: 3.9,
      reviews: 30,
      price: 259,
      oldPrice: null
    },
    {
      id: 28,
      badge: 'Old',
      badgeColor: 'green',
      img: 'https://www.bing.com/th/id/OIP.GtwsPJXUy32vpVRfI-cuxwHaHZ?w=193&h=192&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      name: 'Wall Clock',
      rating: 4.0,
      reviews: 90,
      price: 469,
      oldPrice: null
    },
  ]

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price Low to High') return a.price - b.price
    if (sortBy === 'Price High to Low') return b.price - a.price
    if (sortBy === 'Popularity') return b.reviews - a.reviews
    return 0
  })

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Products</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <FiChevronRight />
          <span>Products</span>
        </div>
      </div>

      <div className="products-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="search-icon" />
        </div>
        <select 
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>Sort by: Newest</option>
          <option>Sort by: Price Low to High</option>
          <option>Sort by: Price High to Low</option>
          <option>Sort by: Popularity</option>
        </select>
      </div>

      <div className="products-grid">
        {sortedProducts.length === 0 ? (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try searching with different keywords</p>
          </div>
        ) : (
          sortedProducts.map(product => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <span className={`product-badge ${product.badgeColor}`}>
                  {product.badge}
                </span>
              )}
              <div className="product-img">
                <img src={product.img} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <div className="product-rating">
                <span className="stars">{renderStars(product.rating)}</span>
                <span className="reviews">({product.reviews})</span>
              </div>
              <div className="product-price">
                <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
                {product.oldPrice && (
                  <span className="old-price">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
              <div className="product-actions">
                <button 
                  className="cart-icon-btn" 
                  onClick={() => handleAddToCart(product)}
                >
                  <FiShoppingCart />
                </button>
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Product
