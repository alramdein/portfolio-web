import personalData from '../data/personal.json'
import skillsData from '../data/skills.json'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            👋 Hi, I'm a Software Engineer 💻
          </div>
          <h1 className="hero-title">{personalData.name}</h1>
          <p className="hero-description">{personalData.description}</p>
          
          <div className="skills-section">
            <div className="skills-grid">
              {skillsData.map(skill => (
                <a
                  key={skill.name}
                  href={skill.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-item"
                  title={skill.name}
                >
                  <img src={skill.logo} alt={skill.name} />
                </a>
              ))}
            </div>
            <div className="additional-label">
              <span className="label-item">Detail-oriented</span>
              <span className="label-item">Fast-paced learner</span>
            </div>
          </div>
          
          <a href="#contact" className="hero-cta">Let's Work Together!</a>
        </div>
        <div className="hero-right">
          <div className="hero-image">
            <img 
              src={personalData.avatar} 
              alt="Alif Ramdani" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-placeholder" style={{display: 'none'}}>
              <div className="placeholder-initial">AR</div>
            </div>
          </div>
          <a 
            href="https://github.com/alramdein" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>@alramdein</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero