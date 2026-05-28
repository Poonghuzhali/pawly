function Newsletter() {
  return (
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
          <img src={`${import.meta.env.BASE_URL}images/img_24.png`} alt="Pets" />
        </div>
      </div>
    </section>
  )
}

export default Newsletter
