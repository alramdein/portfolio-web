import { Link } from 'react-router-dom'
import personalData from '../data/personal.json'
import skillsData from '../data/skills.json'
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon, PinIcon } from './Icons'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true"></span>
            Go · Node.js · Python · 4+ years in production
          </p>

          <h1 className="hero-title">{personalData.name}</h1>

          <p className="hero-role">
            {personalData.role}
            <span className="role-divider" aria-hidden="true">/</span>
            <span className="role-accent">{personalData.specialty}</span>
          </p>

          <p className="hero-description">{personalData.description}</p>

          <div className="hero-stack">
            <span className="stack-label">Daily drivers</span>
            <div className="stack-grid">
              {skillsData.map(skill => (
                <a
                  key={skill.name}
                  href={skill.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stack-item"
                  data-tooltip={skill.name}
                >
                  <img src={skill.logo} alt={skill.name} loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <a href={`mailto:${personalData.contact.email}`} className="btn btn-primary">
              <MailIcon />
              <span>Email me</span>
            </a>
            <Link to="/#work" className="btn btn-ghost">
              <span>See my work</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="hero-meta">
            <span className="meta-item">
              <PinIcon /> {personalData.contact.location}
            </span>
            <a
              className="meta-item meta-link"
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon /> @alramdein
            </a>
            <a
              className="meta-item meta-link"
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-frame">
            <div className="avatar-ring" aria-hidden="true"></div>
            <img
              className="avatar-img"
              src={personalData.avatar}
              alt={personalData.name}
              onError={e => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'grid'
              }}
            />
            <div className="avatar-placeholder" style={{ display: 'none' }}>
              AR
            </div>
          </div>
        </div>
      </div>

      <div className="metrics-band">
        <div className="container metrics-inner">
          {personalData.metrics.map(metric => (
            <div className="metric" key={metric.label}>
              <span className="metric-value">
                {metric.value}
                <span className="metric-unit">{metric.unit}</span>
              </span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
