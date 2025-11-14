import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-square"></div>
            <span>AR</span>
          </div>
        </div>
        <div className="nav-center">
          <a href="#home" className="nav-link active">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
          <a href="#contact" className="nav-link">CONTACT ME</a>
        </div>
        <div className="nav-right">
          <a 
            href="https://drive.google.com/uc?export=download&id=1mbsx-APB4mEWTaSBEuYU3JJvPcGprPAD" 
            className="nav-cta"
            download="Alif_Ramdani_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar