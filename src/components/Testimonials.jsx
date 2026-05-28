function Testimonials() {
  return (
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
              <img src={`${import.meta.env.BASE_URL}images/img_49.png`} alt="Sarah" />
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
              <img src={`${import.meta.env.BASE_URL}images/img_50.png`} alt="Mike" />
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
              <img src={`${import.meta.env.BASE_URL}images/img_51.png`} alt="Emily" />
              <div>
                <h4>Emily Davis</h4>
                <span>Pet Parent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
