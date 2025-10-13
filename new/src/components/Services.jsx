import React from 'react'
import { FaChild, FaUserGraduate, FaUser, FaUserTie } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaChild />,
      title: 'Kids',
      age: '4-12 ani',
      description: 'Cursuri speciale de muzică pentru copii, unde învățarea devine o aventură plăcută și creativă.',
      color: '#ff6b9d'
    },
    {
      icon: <FaUserGraduate />,
      title: 'Teens',
      age: '13-17 ani',
      description: 'Programe adaptate pentru adolescenți, concentrându-se pe dezvoltarea stilului propriu și tehnica avansată.',
      color: '#5cc8be'
    },
    {
      icon: <FaUser />,
      title: 'Adults',
      age: '18+ ani',
      description: 'Cursuri pentru adulți de toate nivelurile, de la începători la avansați, într-un mediu relaxat.',
      color: '#ffa500'
    },
    {
      icon: <FaUserTie />,
      title: 'Private Lessons',
      age: 'Toate vârstele',
      description: 'Lecții private personalizate, individual sau în grupuri mici, cu atenție specială pentru fiecare elev.',
      color: '#9370db'
    }
  ]

  return (
    <section className="services section" id="courses">
      <div className="container">
        <div className="section-title">
          <h2>Cursurile Noastre</h2>
          <p>Oferim programe de învățare pentru toate vârstele și nivelurile de experiență</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ '--card-color': service.color }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-age">{service.age}</p>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">Află mai multe</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
