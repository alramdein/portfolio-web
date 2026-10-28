import contentData from '../data/content.json'
import personalData from '../data/personal.json'
import Reveal from './Reveal'
import { ArrowIcon, PenIcon, PlayIcon } from './Icons'
import './Content.css'

function Content() {
  const { articles, videos } = contentData

  return (
    <section className="section content-section" id="writing">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Off the clock</span>
          <h2 className="section-title">Writing &amp; video</h2>
          <p className="section-lead">
            I explain things to learn them properly. Engineering on Medium; tech, history
            and science on YouTube.
          </p>
        </Reveal>

        <div className="content-cols">
          <Reveal className="content-col">
            <h3 className="col-head">
              <PenIcon /> Writing
              <span className="col-source">Medium</span>
            </h3>

            <div className="col-list">
              {articles.map(article => (
                <a
                  className="article-row"
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="article-title">{article.title}</span>
                  <span className="article-excerpt">{article.excerpt}</span>
                  <span className="article-meta">
                    <span>{article.date}</span>
                    <span className="dot" aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={personalData.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="col-cta"
            >
              All articles <ArrowIcon />
            </a>
          </Reveal>

          <Reveal className="content-col" delay={90}>
            <h3 className="col-head">
              <PlayIcon /> Video
              <span className="col-source">YouTube</span>
            </h3>

            <div className="col-list">
              {videos.map(video => (
                <a
                  className="video-row"
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="video-thumb">
                    <img src={video.thumbnail} alt="" loading="lazy" />
                    <span className="video-play" aria-hidden="true">
                      <PlayIcon />
                    </span>
                  </span>
                  <span className="video-info">
                    <span className="video-title">{video.title}</span>
                    <span className="video-duration">{video.duration}</span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={personalData.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="col-cta"
            >
              YouTube channel <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Content
