function Services() {
  return (
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
              <img src={`${import.meta.env.BASE_URL}images/img_6.png`} alt="Pet Grooming" />
            </div>
            <h3>Pet Grooming</h3>
            <p>Professional grooming services to keep your pet looking and feeling great.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={`${import.meta.env.BASE_URL}images/img_7.png`} alt="Pet Food" />
            </div>
            <h3>Premium Food</h3>
            <p>Nutritious and delicious food options for all breeds and sizes.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={`${import.meta.env.BASE_URL}images/img_5.png`} alt="Veterinary" />
            </div>
            <h3>Vet Care</h3>
            <p>Expert veterinary care and health checkups for your furry friends.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src={`${import.meta.env.BASE_URL}images/img_8.png`} alt="Pet Toys" />
            </div>
            <h3>Fun Toys</h3>
            <p>Exciting and safe toys to keep your pets entertained for hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
