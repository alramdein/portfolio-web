import { useState } from 'react'
import personalData from '../data/personal.json'

function Contact() {
  const [formData, setFormData] = useState({
    from: '',
    subject: 'Collaboration Opportunity',
    message: `Hi Alif,

I came across your portfolio and I'm impressed by your work. I'd love to discuss a potential collaboration opportunity.

Looking forward to hearing from you!

Best regards,`
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const emailSubject = `[Portfolio Inquiry] ${formData.subject}`
    const emailBody = `From: ${formData.from}\n\n${formData.message}`
    
    // Open Gmail compose with CC to sender so you can reply directly to them
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ramdanialif26@gmail.com&cc=${encodeURIComponent(formData.from)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    window.open(gmailUrl, '_blank')
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Let's Work Together</h2>
        <p className="contact-subtitle">Have a project in mind? Drop me a message!</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from">Your Email</label>
            <input
              type="email"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="8"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            🚀 Send Message
          </button>
        </form>
        
        <div className="contact-info">
          <p>📍 {personalData.contact.location}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact