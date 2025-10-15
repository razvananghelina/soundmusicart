import React from 'react'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './MapSection.css'

const MapSection = () => {
  return (
    <section className="map-section section">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-item">
              <h3>
                <FaMapMarkerAlt className="info-icon-inline" />
                Adresa
              </h3>
              <p>Bulevardul Frații Golești 74<br />Pitești</p>
            </div>

            <div className="info-item">
              <h3>
                <FaClock className="info-icon-inline" />
                Program de lucru
              </h3>
              <p>Luni - Vineri: 09:00 - 18:00<br />Sâmbătă: 10:00 - 14:00</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              loading="lazy"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.835801456276!2d24.885573077286924!3d44.8452771710706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2bcedbeea0b8b%3A0xa6844b03fa364243!2sSound%20Music%20Art!5e0!3m2!1sro!2sro!4v1759907511934!5m2!1sro!2sro"
              allowFullScreen=""
              title="Sound Music Art Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
