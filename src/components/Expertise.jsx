import expertiseData from '../data/expertise.json'
import personalData from '../data/personal.json'
import Reveal from './Reveal'
import { CapIcon } from './Icons'
import './Expertise.css'

function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Toolbox</span>
          <h2 className="section-title">Skills &amp; background</h2>
          <p className="section-lead">
            Honest proficiency levels, not a wall of logos. Advanced means I've carried
            production systems on it.
          </p>
        </Reveal>

        <div className="expertise-layout">
          <div className="skill-tiers">
            {expertiseData.map((tier, index) => (
              <Reveal className="skill-tier" key={tier.level} delay={index * 80}>
                <div className="tier-head">
                  <span className="tier-name">{tier.level}</span>
                  <span className="tier-meter" aria-hidden="true">
                    {[1, 2, 3].map(step => (
                      <span key={step} className={`meter-bar ${step <= tier.weight ? 'is-on' : ''}`} />
                    ))}
                  </span>
                </div>
                <div className="tier-skills">
                  {tier.skills.map(skill => (
                    <span className={`skill-pill level-${tier.weight}`} key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="expertise-aside">
            <Reveal className="aside-card" delay={120}>
              <h3 className="aside-title">
                <CapIcon /> Education
              </h3>
              {personalData.education.map(item => (
                <div className="edu-item" key={item.school}>
                  <span className="edu-degree">{item.field}</span>
                  <span className="edu-school">{item.school}</span>
                  <span className="edu-meta">{item.degree}</span>
                  <span className="edu-period">{item.period}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="aside-card" delay={200}>
              <h3 className="aside-title">Languages</h3>
              <div className="lang-list">
                {personalData.languages.map(lang => (
                  <div className="lang-item" key={lang.name}>
                    <span>{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
