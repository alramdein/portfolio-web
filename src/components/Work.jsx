import { Link } from 'react-router-dom'
import portfolioData from '../data/portfolio.json'
import Reveal from './Reveal'
import { ArrowIcon } from './Icons'
import './Work.css'

function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">Systems I designed and shipped</h2>
          <p className="section-lead">
            Three production systems, each written up the way I'd explain it in an interview:
            the problem, what I owned, the design tradeoffs, and what it did once it was live.
          </p>
        </Reveal>

        <div className="work-grid">
          {portfolioData.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <Link to={`/work/${project.slug}`} className="work-card">
                <div className="work-thumb">
                  <img src={project.thumbnail} alt="" loading="lazy" />
                  <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="work-body">
                  <h3 className="work-title">{project.title}</h3>
                  <p className="work-tagline">{project.tagline}</p>

                  <dl className="work-metrics">
                    {project.metrics.map(metric => (
                      <div className="work-metric" key={metric.label}>
                        <dt className="work-metric-value">{metric.value}</dt>
                        <dd className="work-metric-label">{metric.label}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="work-tags">
                    {project.skills.slice(0, 4).map(skill => (
                      <span className="tag" key={skill}>{skill}</span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="tag tag-more">+{project.skills.length - 4}</span>
                    )}
                  </div>

                  <span className="work-cta">
                    Read case study <ArrowIcon />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
