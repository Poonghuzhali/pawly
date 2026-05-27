import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-logo">
            <img src="/images/img_2.png" alt="Pawly" className="logo-img" />
            <span className="logo-text">Pawly</span>
          </div>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <button className="cart-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
              </svg>
              <span className="cart-count">0</span>
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h5 className="hero-subtitle">Welcome to Pawly</h5>
            <h1 className="hero-title">We Care For<br />Your <span>Pets</span></h1>
            <p className="hero-desc">Providing love, care, and the best products for your furry family members. Your pet's happiness is our mission.</p>
            <div className="hero-btns">
              <a href="#products" className="btn btn-primary">Shop Now</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/img_4.png" alt="Happy pets" />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-container">
          <div className="about-image">
            <img src="/images/img_14.png" alt="About Pawly" />
          </div>
          <div className="about-content">
            <h5 className="section-subtitle">About Us</h5>
            <h2 className="section-title">A Loving Home<br />For Every Pet</h2>
            <p className="about-desc">At Pawly, we believe every pet deserves the best. From premium food to cozy beds and fun toys, we offer everything your pet needs to live a happy, healthy life.</p>
            <div className="about-stats">
              <div className="stat">
                <h3>10K+</h3>
                <p>Happy Pets</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Products</p>
              </div>
              <div className="stat">
                <h3>5K+</h3>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h5 className="section-subtitle">Our Services</h5>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-desc">Comprehensive care and products for your beloved pets</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/img_6.png" alt="Pet Grooming" />
              </div>
              <h3>Pet Grooming</h3>
              <p>Professional grooming services to keep your pet looking and feeling great.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/img_7.png" alt="Pet Food" />
              </div>
              <h3>Premium Food</h3>
              <p>Nutritious and delicious food options for all breeds and sizes.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/img_5.png" alt="Veterinary" />
              </div>
              <h3>Vet Care</h3>
              <p>Expert veterinary care and health checkups for your furry friends.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/img_8.png" alt="Pet Toys" />
              </div>
              <h3>Fun Toys</h3>
              <p>Exciting and safe toys to keep your pets entertained for hours.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h5 className="section-subtitle">Our Products</h5>
            <h2 className="section-title">Featured Collection</h2>
            <p className="section-desc">Handpicked items your pets will love</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-img">
                <img src="/images/img_29.png" alt="Pet Product" />
                <span className="product-badge">New</span>
              </div>
              <div className="product-info">
                <h3>Cozy Pet Bed</h3>
                <p className="product-cat">Bedding</p>
                <div className="product-bottom">
                  <span className="product-price">$49.99</span>
                  <button className="add-cart">+ Add</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src="/images/img_33.png" alt="Pet Product" />
              </div>
              <div className="product-info">
                <h3>Organic Pet Food</h3>
                <p className="product-cat">Food</p>
                <div className="product-bottom">
                  <span className="product-price">$29.99</span>
                  <button className="add-cart">+ Add</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src="/images/img_38.png" alt="Pet Product" />
                <span className="product-badge sale">Sale</span>
              </div>
              <div className="product-info">
                <h3>Pet Grooming Kit</h3>
                <p className="product-cat">Grooming</p>
                <div className="product-bottom">
                  <span className="product-price">$34.99</span>
                  <button className="add-cart">+ Add</button>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-img">
                <img src="/images/img_48.png" alt="Pet Product" />
              </div>
              <div className="product-info">
                <h3>Interactive Toy Set</h3>
                <p className="product-cat">Toys</p>
                <div className="product-bottom">
                  <span className="product-price">$19.99</span>
                  <button className="add-cart">+ Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h5 className="section-subtitle">Testimonials</h5>
            <h2 className="section-title">What Pet Parents Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Pawly has been a game changer for my dog Max. The products are top quality and my pup absolutely loves them!"</p>
              <div className="testimonial-author">
                <img src="/images/img_49.png" alt="Sarah" />
                <div>
                  <h4>Sarah Johnson</h4>
                  <span>Pet Parent</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"The grooming service is incredible! My cat Whiskers has never looked better. Highly recommend Pawly to all pet owners."</p>
              <div className="testimonial-author">
                <img src="/images/img_50.png" alt="Mike" />
                <div>
                  <h4>Mike Thompson</h4>
                  <span>Pet Parent</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Fast delivery and amazing customer service. The pet food selection is fantastic and my picky eater loves every flavor!"</p>
              <div className="testimonial-author">
                <img src="/images/img_51.png" alt="Emily" />
                <div>
                  <h4>Emily Davis</h4>
                  <span>Pet Parent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get updates on new products, special offers, and pet care tips</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
          <div className="newsletter-image">
            <img src="/images/img_24.png" alt="Pets" />
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer-container">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/images/img_2.png" alt="Pawly" />
              <span>Pawly</span>
            </div>
            <p>Your trusted partner in pet care. We provide everything your furry friends need.</p>
            <div className="social-links">
              <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
              <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <a href="#">Pet Grooming</a>
            <a href="#">Pet Boarding</a>
            <a href="#">Veterinary</a>
            <a href="#">Pet Training</a>
            <a href="#">Pet Walking</a>
          </div>
          <div className="footer-col">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>123 Pet Street, NY 10001</span>
            </div>
            <div className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>hello@pawly.com</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Pawly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
