import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>Suntem aici pentru tine! Contactează-ne pentru informații</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informații de Contact</h2>
              <p className="contact-intro">
                Dacă ai întrebări despre cursurile noastre, programul sau dorești să te înscrii, nu ezita să ne contactezi!
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>Adresă</h3>
                    <p>Bulevardul Frații Golești 74<br />Pitești, România</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>Telefon</h3>
                    <p>+40 123 456 789</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>info@soundmusicart.ro</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-details">
                    <h3>Program de lucru</h3>
                    <p>Luni - Vineri: 09:00 - 18:00<br />Sâmbătă: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Trimite-ne un mesaj</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label>Nume</label>
                  <input type="text" placeholder="Numele tău" required />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email-ul tău" required />
                </div>

                <div className="form-group">
                  <label>Telefon</label>
                  <input type="tel" placeholder="Număr de telefon" />
                </div>

                <div className="form-group">
                  <label>Subiect</label>
                  <input type="text" placeholder="Subiectul mesajului" required />
                </div>

                <div className="form-group">
                  <label>Mesaj</label>
                  <textarea rows="5" placeholder="Mesajul tău" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Trimite mesajul</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
