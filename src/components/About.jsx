function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-image">
          <img src={`${import.meta.env.BASE_URL}images/img_14.png`} alt="About Pawly" />
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
  )
}

export default About
