function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}images/img_2.png`} alt="Pawly" className="logo-img" />
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
  )
}

export default Navbar
