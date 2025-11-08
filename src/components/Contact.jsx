import personalData from '../data/personal.json'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>Email: {personalData.contact.email}</p>
          <p>Location: {personalData.contact.location}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact