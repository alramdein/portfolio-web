import youtubeData from '../data/youtube.json'

function YoutubeVideos() {
  return (
    <section className="youtube-section" id="videos">
      <div className="container">
        <h2>I'm a content creator! 🎥</h2>
        <p className="section-subtitle">Tech, History and Science</p>
        <div className="content-grid">
          {youtubeData.map(video => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card video-card"
            >
              <div className="content-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="duration-badge">{video.duration}</div>
                <div className="play-overlay">
                  <div className="play-button">▶️</div>
                </div>
              </div>
              <div className="content-info">
                <h3 className="content-title">{video.title}</h3>
                <div className="content-meta">
                  <span className="youtube-channel">@ramdanisides</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YoutubeVideos