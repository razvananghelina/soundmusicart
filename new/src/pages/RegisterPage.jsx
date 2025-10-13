import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaMusic, FaCalendar } from 'react-icons/fa'
import './RegisterPage.css'

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="page-hero">
        <div className="container">
          <h1>Înscrie-te</h1>
          <p>Începe călătoria ta muzicală astăzi!</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="register-content">
            <div className="register-info">
              <h2>De ce să te înscrii?</h2>
              <ul className="benefits-list">
                <li>Profesori calificați cu experiență vastă</li>
                <li>Cursuri personalizate pentru fiecare elev</li>
                <li>Acces la studio de înregistrări profesional</li>
                <li>Atmosferă caldă și motivațională</li>
                <li>Evenimente și spectacole regulate</li>
                <li>Tehnica Vocală Completă (CVT)</li>
              </ul>

              <div className="info-box">
                <h3>Program flexibil</h3>
                <p>Oferim cursuri în multiple zile și intervale orare pentru a se potrivi programului tău.</p>
              </div>

              <div className="info-box">
                <h3>Lecție de probă gratuită</h3>
                <p>Înscrie-te pentru o lecție de probă gratuită și descoperă dacă suntem potriviți pentru tine!</p>
              </div>
            </div>

            <div className="register-form-wrapper">
              <h2>Formular de Înscriere</h2>
              <form className="register-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nume</label>
                    <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <input type="text" placeholder="Nume complet" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-with-icon">
                      <FaEnvelope className="input-icon" />
                      <input type="email" placeholder="adresa@email.com" required />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Telefon</label>
                    <div className="input-with-icon">
                      <FaPhone className="input-icon" />
                      <input type="tel" placeholder="+40 xxx xxx xxx" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Vârstă</label>
                    <div className="input-with-icon">
                      <FaCalendar className="input-icon" />
                      <input type="number" placeholder="Vârsta" required />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Instrument / Curs de interes</label>
                  <div className="input-with-icon">
                    <FaMusic className="input-icon" />
                    <select required>
                      <option value="">Selectează cursul</option>
                      <option value="pian">Pian</option>
                      <option value="chitara">Chitară</option>
                      <option value="voce">Voce (Canto)</option>
                      <option value="tobe">Tobe</option>
                      <option value="vioara">Vioară</option>
                      <option value="nai">Nai</option>
                      <option value="acordeon">Acordeon</option>
                      <option value="cor">COR</option>
                      <option value="dezvoltare">Dezvoltare personală</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Nivel de experiență</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="nivel" value="incepator" required />
                      <span>Începător</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="nivel" value="intermediar" />
                      <span>Intermediar</span>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="nivel" value="avansat" />
                      <span>Avansat</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Mesaj / Întrebări (opțional)</label>
                  <textarea rows="4" placeholder="Spune-ne mai multe despre obiectivele tale muzicale..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Trimite cererea de înscriere
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage
