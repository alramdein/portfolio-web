import { useState } from 'react'
import experienceData from '../data/experience.json'

function Experience() {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const formatDescription = (description) => {
    // Split on periods that are followed by a space and capital letter (new sentences)
    // This preserves technology names like "Node.js", "v1.2.3", etc.
    return description
      .split(/\. (?=[A-Z])/)
      .filter(item => item.trim())
      .map(item => item.trim().replace(/\.$/, '')) // Remove trailing periods
  }

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {experienceData.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="company">
                    <a href={job.website} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  </h3>
                  <span className="period">{job.period}</span>
                </div>
                <h4 className="position">{job.position}</h4>
                
                <button 
                  className="toggle-btn"
                  onClick={() => toggleExpanded(job.id)}
                >
                  {expandedItems[job.id] ? 'Less' : 'More'}
                </button>
                
                {expandedItems[job.id] && (
                  <ul className="description">
                    {formatDescription(job.description).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience