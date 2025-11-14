import articlesData from '../data/articles.json'

function MediumArticles() {
  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <h2>I also write some! ✍️</h2>
        <div className="content-grid">
          {articlesData.map(article => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card article-card"
            >
              <div className="article-header">
                <div className="medium-icon">📝</div>
                <div className="article-meta">
                  <span className="read-time">{article.readTime}</span>
                  <span className="article-date">{article.date}</span>
                </div>
              </div>
              <div className="content-info">
                <h3 className="content-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-stats">
                  <span className="claps">👏 {article.claps}</span>
                  <span className="medium-link">Read on Medium</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediumArticles