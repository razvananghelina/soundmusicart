import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import logo from '../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <img src={logo} alt="SoundMusicArt Logo" />
              </div>
              <p className="footer-description">
                Școală de muzică profesională dedicată pasiunii și excelenței în educația muzicală.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><FaFacebookSquare /></a>
                <a href="#" aria-label="Twitter"><FaTwitterSquare /></a>
                <a href="#" aria-label="Instagram"><FaInstagramSquare /></a>
                <a href="#" aria-label="YouTube"><FaYoutubeSquare /></a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Link-uri Rapide</h3>
              <ul className="footer-links">
                <li><Link to="/">Acasa</Link></li>
                <li><Link to="/despre-noi">Despre noi</Link></li>
                <li><Link to="/profesori">Profesorii nostri</Link></li>
                <li><Link to="/cursuri">Cursuri</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Cursuri Populare</h3>
              <ul className="footer-links">
                <li><a href="#piano">Pian</a></li>
                <li><a href="#guitar">Chitară</a></li>
                <li><a href="#voice">Voce</a></li>
                <li><a href="#drums">Baterie</a></li>
                <li><a href="#violin">Vioară</a></li>
                <li><a href="#saxophone">Saxophone</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>Bulevardul Frații Golești 74, Pitești</span>
                </li>
                <li>
                  <FaPhone />
                  <span>+40 123 456 789</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@soundmusicart.ro</span>
                </li>
              </ul>
              <Link to="/inscrie-te" className="btn btn-primary footer-btn">Inscrie-te Acum</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 SoundMusicArt. Toate drepturile rezervate.</p>
            <p>
              Creat cu <FaHeart className="heart-icon" /> pentru muzică
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
