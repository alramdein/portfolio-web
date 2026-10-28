import { useState } from 'react'
import personalData from '../data/personal.json'
import Reveal from './Reveal'
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon, PinIcon } from './Icons'
import './Contact.css'

const DEFAULT_MESSAGE = `Hi Alif,

I came across your portfolio and I'd love to talk about a role / project we're working on.

A bit of context:

Looking forward to hearing from you!

Best regards,`

function Contact() {
  const [formData, setFormData] = useState({
    from: '',
    subject: 'Collaboration Opportunity',
    message: DEFAULT_MESSAGE,
  })
  const [copied, setCopied] = useState(false)

  const email = personalData.contact.email

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const subject = `[Portfolio Inquiry] ${formData.subject}`
    const body = `From: ${formData.from}\n\n${formData.message}`
    // CC the sender so the thread lands in their inbox too and I can just hit reply.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&cc=${encodeURIComponent(formData.from)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-lead">
            Email is the fastest way to reach me.
          </p>
        </Reveal>

        <div className="contact-layout">
          <Reveal className="contact-aside">
            <div className="contact-identity">
              <img
                className="contact-avatar"
                src={personalData.avatar}
                alt={personalData.name}
                width="56"
                height="56"
                loading="lazy"
              />
              <span className="contact-identity-text">
                <span className="contact-name">{personalData.name}</span>
                <span className="contact-role">{personalData.role}</span>
              </span>
            </div>

            <button className="email-card" onClick={copyEmail} type="button">
              <span className="email-icon"><MailIcon /></span>
              <span className="email-body">
                <span className="email-label">Email</span>
                <span className="email-value">{email}</span>
              </span>
              <span className={`email-copy ${copied ? 'is-copied' : ''}`}>
                {copied ? 'Copied' : 'Copy'}
              </span>
            </button>

            <a href={`mailto:${email}`} className="btn btn-primary btn-block">
              <MailIcon />
              <span>Open my mail app</span>
            </a>

            <div className="contact-facts">
              <span className="fact">
                <PinIcon /> {personalData.contact.location}
              </span>
              <span className="fact">
                <span className="status-dot" aria-hidden="true"></span>
                English or Indonesian
              </span>
            </div>

            <div className="contact-socials">
              <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={personalData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={100}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from">Your email</label>
                  <input
                    type="email"
                    id="from"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder="you@company.com"
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
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="9"
                  placeholder="Tell me about the role or the project..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <span>Compose in Gmail</span>
                <ArrowIcon />
              </button>

              <p className="form-note">
                This opens a prefilled Gmail draft. Nothing sends until you hit send.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
