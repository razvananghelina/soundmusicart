import React from 'react'
import { GiGrandPiano, GiGuitar, GiDrum, GiViolin, GiSaxophone, GiTrumpet, GiFlute, GiMusicalKeyboard } from 'react-icons/gi'
import { FaMicrophone } from 'react-icons/fa'
import './Instruments.css'

const Instruments = () => {
  const instruments = [
    {
      icon: <GiGrandPiano />,
      name: 'Pian',
      description: 'Învață clasic sau modern pe pian',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: <GiGuitar />,
      name: 'Chitară',
      description: 'Chitară acustică și electrică',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: <FaMicrophone />,
      name: 'Voce',
      description: 'Tehnici vocale și interpretare',
      bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: <GiDrum />,
      name: 'Baterie',
      description: 'Ritmuri și tehnici de percuție',
      bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: <GiViolin />,
      name: 'Vioară',
      description: 'Tehnici clasice de vioară',
      bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: <GiSaxophone />,
      name: 'Saxophone',
      description: 'Jazz, blues și muzică clasică',
      bgGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      icon: <GiTrumpet />,
      name: 'Trompetă',
      description: 'Instrument de suflat din alamă',
      bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      icon: <GiFlute />,
      name: 'Flaut',
      description: 'Melodii dulci și armonioase',
      bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      icon: <GiMusicalKeyboard />,
      name: 'Keyboard',
      description: 'Sintezizator și muzică electronică',
      bgGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }
  ]

  return (
    <section className="instruments section" id="instruments">
      <div className="container">
        <div className="section-title">
          <h2>Instrumente Muzicale</h2>
          <p>Oferim cursuri pentru o gamă largă de instrumente muzicale</p>
        </div>

        <div className="instruments-grid">
          {instruments.map((instrument, index) => (
            <div key={index} className="instrument-card">
              <div className="instrument-bg" style={{ background: instrument.bgGradient }}></div>
              <div className="instrument-content">
                <div className="instrument-icon">{instrument.icon}</div>
                <h3 className="instrument-name">{instrument.name}</h3>
                <p className="instrument-description">{instrument.description}</p>
                <button className="instrument-btn">Detalii</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instruments
