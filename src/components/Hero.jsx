import personalData from '../data/personal.json'
import skillsData from '../data/skills.json'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            👋 Seasoned Software Engineer 💻
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
        </div>
      </div>
    </section>
  )
}

export default Hero