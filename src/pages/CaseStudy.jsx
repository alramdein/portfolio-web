import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import portfolioData from '../data/portfolio.json'
import personalData from '../data/personal.json'
import Reveal from '../components/Reveal'
import { ArrowIcon, MailIcon } from '../components/Icons'
import './CaseStudy.css'

function CaseStudy() {
  const { slug } = useParams()
  const index = portfolioData.findIndex(p => p.slug === slug)
  const project = portfolioData[index]

  useEffect(() => {
    if (!project) return
    document.title = `${project.title} — Alif Ramdani`
    return () => {
      document.title = 'Alif Ramdani — Backend Engineer | Distributed & Scalable Systems'
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const next = portfolioData[(index + 1) % portfolioData.length]

  return (
    <article className="case">
      <div className="container case-inner">
        <Link to="/#work" className="case-back">
          <ArrowIcon className="flip" /> All work
        </Link>

        <header className="case-head">
          <span className="case-index">
            Case study {String(index + 1).padStart(2, '0')} / {String(portfolioData.length).padStart(2, '0')}
          </span>
          <h1 className="case-title">{project.title}</h1>
          <p className="case-tagline">{project.tagline}</p>

          <div className="case-tags">
            {project.skills.map(skill => (
              <span className="tag" key={skill}>{skill}</span>
            ))}
          </div>
        </header>

        <div className="case-metrics">
          {project.metrics.map(metric => (
            <div className="case-metric" key={metric.label}>
              <span className="case-metric-value">{metric.value}</span>
              <span className="case-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        <figure className="case-figure">
          <img src={project.thumbnail} alt={`${project.title} architecture diagram`} />
        </figure>

        <div className="case-body">
          {project.sections.map((section, i) => (
            <Reveal className="case-section" key={section.heading} delay={i * 60}>
              <h2 className="case-heading">{section.heading}</h2>
              {section.body.split('\n\n').map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </Reveal>
          ))}
        </div>

        <footer className="case-foot">
          <Link to={`/work/${next.slug}`} className="case-next">
            <span className="case-next-label">Next case study</span>
            <span className="case-next-title">
              {next.title} <ArrowIcon />
            </span>
          </Link>

          <a href={`mailto:${personalData.contact.email}`} className="btn btn-primary">
            <MailIcon />
            <span>Email me about this</span>
          </a>
        </footer>
      </div>
    </article>
  )
}

export default CaseStudy
