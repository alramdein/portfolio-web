import personalData from '../data/personal.json'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>{personalData.about}</p>
      </div>
    </section>
  )
}

export default About