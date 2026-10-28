import { Link } from 'react-router-dom'
import personalData from '../data/personal.json'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">AR</span>
          <div>
            <p className="footer-name">{personalData.name}</p>
            <p className="footer-role">
              {personalData.role} · {personalData.contact.location}
            </p>
          </div>
        </div>

        <nav className="footer-links">
          <Link to="/#work">Work</Link>
          <Link to="/#experience">Experience</Link>
          <Link to="/#writing">Writing</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <div className="footer-socials">
          <a href={`mailto:${personalData.contact.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={personalData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {personalData.name}</p>
        <p>Built with React &amp; Vite</p>
      </div>
    </footer>
  )
}

export default Footer
