import experienceData from '../data/experience.json'
import personalData from '../data/personal.json'
import Reveal from './Reveal'
import { ArrowIcon, ExternalIcon } from './Icons'
import './Experience.css'

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-lead">
            Five years of backend work, mostly in Go, across commerce, logistics and
            news media. The detail lives on LinkedIn.
          </p>
        </Reveal>

        <Reveal className="roles">
          {experienceData.map(job => (
            <div className="role" key={job.id}>
              <div className="role-main">
                <h3 className="role-company">
                  <a href={job.website} target="_blank" rel="noopener noreferrer">
                    {job.company}
                    <ExternalIcon />
                  </a>
                  {job.current && <span className="badge-current">Current</span>}
                </h3>
                <p className="role-position">{job.position}</p>
                <p className="role-summary">{job.summary}</p>
              </div>
              <span className="role-years">{job.years}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="roles-foot" delay={80}>
          <a
            href={personalData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            Full history on LinkedIn <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
