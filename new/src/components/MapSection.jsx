import React from 'react'
import './MapSection.css'

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          loading="lazy"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.835801456276!2d24.885573077286924!3d44.8452771710706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2bcedbeea0b8b%3A0xa6844b03fa364243!2sSound%20Music%20Art!5e0!3m2!1sro!2sro!4v1759907511934!5m2!1sro!2sro"
          allowFullScreen=""
          title="Sound Music Art Location"
        ></iframe>
      </div>
    </section>
  )
}

export default MapSection
