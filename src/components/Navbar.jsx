import './Navbar.css'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-square"></div>
            <span>AR</span>
          </div>
        </div>
        
        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link active" onClick={closeMenu}>HOME</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>ABOUT</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>EXPERIENCE</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>CONTACT ME</a>
        </div>
        <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="https://drive.google.com/uc?export=download&id=106cwBcrTEQaZsAxA7M61p3Tj2tkD5wTY" 
            className="nav-cta"
            download="Alif_Ramdani_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar