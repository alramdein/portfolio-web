import { useState } from 'react'
import experienceData from '../data/experience.json'
import Reveal from './Reveal'
import { ExternalIcon } from './Icons'
import './Experience.css'

function Experience() {
  const [expanded, setExpanded] = useState({ [experienceData[0].id]: true })

  const toggle = id => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-lead">
            Five years across commerce, logistics and news-media platforms — mostly Go,
            mostly on the part of the system that has to stay up.
          </p>
        </Reveal>

        <div className="timeline">
          {experienceData.map((job, index) => {
            const isOpen = Boolean(expanded[job.id])

            return (
              <Reveal className="timeline-item" key={job.id} delay={index * 70}>
                <span className={`timeline-dot ${job.current ? 'is-current' : ''}`} aria-hidden="true" />

                <div className="timeline-card">
                  <div className="job-top">
                    <div>
                      <h3 className="job-company">
                        <a href={job.website} target="_blank" rel="noopener noreferrer">
                          {job.company}
                          <ExternalIcon />
                        </a>
                        {job.current && <span className="badge-current">Current</span>}
                      </h3>
                      <p className="job-position">{job.position}</p>
                    </div>
                    <span className="job-period">{job.period}</span>
                  </div>

                  <p className="job-summary">{job.summary}</p>

                  <div className="job-tech">
                    {job.tech.map(tech => (
                      <span className="tag" key={tech}>{tech}</span>
                    ))}
                  </div>

                  {job.highlights.length > 1 ? (
                    <>
                      <button
                        className="job-toggle"
                        onClick={() => toggle(job.id)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? 'Hide details' : `Show ${job.highlights.length} highlights`}
                        <span className={`chevron ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
                      </button>

                      {isOpen && (
                        <ul className="job-highlights">
                          {job.highlights.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <ul className="job-highlights is-static">
                      {job.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
