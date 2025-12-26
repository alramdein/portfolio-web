import { useState } from 'react'
import portfolioData from '../data/portfolio.json'
import './PortfolioSection.css'

function PortfolioSection() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null)

  const openModal = (portfolio) => {
    setSelectedPortfolio(portfolio)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedPortfolio(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2>What I've built 🚀</h2>
        <div className="portfolio-grid">
          {portfolioData.map(portfolio => (
            <div
              key={portfolio.id}
              className="portfolio-card"
              onClick={() => openModal(portfolio)}
            >
              <div className="portfolio-thumbnail">
                <img src={portfolio.thumbnail} alt={portfolio.title} />
                <div className="portfolio-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{portfolio.title}</h3>
                <div className="portfolio-skills">
                  {portfolio.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                  {portfolio.skills.length > 3 && (
                    <span className="skill-badge">+{portfolio.skills.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPortfolio && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedPortfolio.thumbnail} alt={selectedPortfolio.title} />
            </div>
            <div className="modal-body">
              <h2 className="modal-title">{selectedPortfolio.title}</h2>
              <div className="modal-description">
                {selectedPortfolio.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="modal-skills">
                <h3>Skills & Technologies</h3>
                <div className="skills-list">
                  {selectedPortfolio.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioSection
