import React from 'react'
import bgMusicNotes from '../assets/bg_music_notes.jpg'
import iconA1 from '../assets/icon_a_1.png'
import iconA2 from '../assets/icon_a_2.png'
import iconA3 from '../assets/icon_a_3.png'
import iconA4 from '../assets/icon_a_4.png'
import './Stats.css'

const Stats = () => {
  const stats = [
    {
      icon: iconA1,
      title: 'Profesori dedicați',
      text: 'Echipă de profesori calificați și pasionați de educația muzicală'
    },
    {
      icon: iconA2,
      title: 'Cursuri personalizate',
      text: 'Fiecare elev beneficiază de un program adaptat nivelului și obiectivelor sale'
    },
    {
      icon: iconA3,
      title: 'Atmosferă creativă',
      text: 'Mediu cald și motivațional care încurajează dezvoltarea artistică'
    },
    {
      icon: iconA4,
      title: 'Experiență completă',
      text: 'Concerte, spectacole și înregistrări în propriul nostru studio'
    }
  ]

  return (
    <section className="stats section" style={{ backgroundImage: `url(${bgMusicNotes})` }}>
      <div className="container">
        <div className="section-title">
          <h2>De ce să alegi Sound Music Art?</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.title} />
              </div>
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
