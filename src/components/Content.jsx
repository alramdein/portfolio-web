import contentData from '../data/content.json'
import personalData from '../data/personal.json'
import Reveal from './Reveal'
import { ArrowIcon, ExternalIcon, PenIcon, PlayIcon } from './Icons'
import './Content.css'

function Content() {
  return (
    <section className="section content-section" id="writing">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Off the clock</span>
          <h2 className="section-title">Writing &amp; video</h2>
          <p className="section-lead">
            I explain things to learn them properly — on Medium about engineering, on
            YouTube about tech, history and science.
          </p>
        </Reveal>

        <Reveal className="content-list">
          {contentData.map(item => (
            <a
              className="content-row"
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`row-icon is-${item.type}`}>
                {item.type === 'video' ? <PlayIcon /> : <PenIcon />}
              </span>

              <span className="row-main">
                <span className="row-title">{item.title}</span>
                <span className="row-excerpt">{item.excerpt}</span>
              </span>

              <span className="row-meta">
                <span className="row-platform">{item.platform}</span>
                <span className="row-detail">{item.meta}</span>
                {item.date && <span className="row-detail">{item.date}</span>}
              </span>

              <span className="row-arrow" aria-hidden="true">
                <ExternalIcon />
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal className="content-links" delay={100}>
          <a href={personalData.social.medium} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            All articles <ArrowIcon />
          </a>
          <a href={personalData.social.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            YouTube channel <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Content
