function Hero() {
  return (
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
          <img src={`${import.meta.env.BASE_URL}images/img_4.png`} alt="Happy pets" />
        </div>
      </div>
    </section>
  )
}

export default Hero
