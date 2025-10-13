import React from 'react'
import { FaUserTie, FaUser, FaTheaterMasks, FaCalendarCheck } from 'react-icons/fa'
import './Stats.css'

const Stats = () => {
  const stats = [
    {
      icon: <FaUserTie />,
      number: '10+',
      text: 'Profesori calificați, cu experiență'
    },
    {
      icon: <FaUser />,
      number: '100%',
      text: 'Cursuri personalizate pentru fiecare elev'
    },
    {
      icon: <FaTheaterMasks />,
      number: '100%',
      text: 'Atmosferă caldă, creativă și motivațională'
    },
    {
      icon: <FaCalendarCheck />,
      number: '∞',
      text: 'Evenimente, spectacole și înregistrări audio/video'
    }
  ]

  return (
    <section className="stats section">
      <div className="stats-overlay"></div>
      <div className="container">
        <div className="section-title">
          <h2>De ce să alegi Sound Music Art?</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
