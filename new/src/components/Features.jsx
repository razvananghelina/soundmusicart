import React from 'react'
import musicIcon1 from '../assets/music_icon_1b.png'
import musicIcon2 from '../assets/music_icon_2b.png'
import musicIcon3 from '../assets/music_icon_3b.png'
import bgAbstract from '../assets/bg_abstract.png'
import './Features.css'

const Features = () => {
  return (
    <section className="features-section section" style={{ backgroundImage: `url(${bgAbstract})` }}>
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={musicIcon1} alt="Educație muzicală" />
            </div>
            <h3>Educație muzicală</h3>
            <p>Programe adaptate pentru toate vârstele și nivelurile</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-large">
              <img src={musicIcon2} alt="Premii și recunoaștere" />
            </div>
            <h3>Premii și recunoaștere</h3>
            <p>Elevii noștri au câștigat premii naționale și internaționale</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src={musicIcon3} alt="Pasiune pentru muzică" />
            </div>
            <h3>Pasiune pentru muzică</h3>
            <p>Dezvoltăm nu doar tehnica, ci și dragostea pentru artă</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
