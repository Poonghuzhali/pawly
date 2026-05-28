function Products() {
  return (
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
              <img src={`${import.meta.env.BASE_URL}images/img_29.png`} alt="Pet Product" />
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
              <img src={`${import.meta.env.BASE_URL}images/img_33.png`} alt="Pet Product" />
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
              <img src={`${import.meta.env.BASE_URL}images/img_38.png`} alt="Pet Product" />
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
              <img src={`${import.meta.env.BASE_URL}images/img_48.png`} alt="Pet Product" />
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
  )
}

export default Products
