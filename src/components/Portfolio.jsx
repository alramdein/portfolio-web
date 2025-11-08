import projectsData from '../data/projects.json'

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio