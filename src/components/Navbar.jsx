import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import personalData from '../data/personal.json'
import { MailIcon } from './Icons'
import './Navbar.css'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const nodes = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean)
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      entries => {
        const inView = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (inView) setActive(inView.target.id)
      },
      // Band sits just below the navbar so the active link tracks what's actually being read.
      { rootMargin: '-25% 0px -60% 0px' }
    )

    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">AR</span>
          <span className="logo-text">
            Alif Ramdani
            <span className="logo-sub">{personalData.role}</span>
          </span>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(open => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-center">
            {SECTIONS.map(section => (
              <Link
                key={section.id}
                to={`/#${section.id}`}
                className={`nav-link ${isHome && active === section.id ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {section.label}
              </Link>
            ))}
          </div>
          <a
            href={`mailto:${personalData.contact.email}`}
            className="nav-cta"
            onClick={closeMenu}
          >
            <MailIcon />
            <span>Email Me</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
