import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaPhone, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/logo.png'
import logoSmall from '../assets/logo_small.png'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-info">
              <span><FaPhone /> +40 123 456 789</span>
              <span><FaEnvelope /> info@soundmusicart.ro</span>
            </div>
            <div className="header-social">
              <a href="#" aria-label="Facebook"><FaFacebookSquare /></a>
              <a href="#" aria-label="Twitter"><FaTwitterSquare /></a>
              <a href="#" aria-label="Instagram"><FaInstagramSquare /></a>
              <a href="#" aria-label="YouTube"><FaYoutubeSquare /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            <Link to="/" className="logo">
              <img src={isScrolled ? logoSmall : logo} alt="SoundMusicArt Logo" className={isScrolled ? 'logo-small' : ''} />
            </Link>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-menu">
                <li><Link to="/" onClick={toggleMenu}>Acasa</Link></li>
                <li><Link to="/despre-noi" onClick={toggleMenu}>Despre noi</Link></li>
                <li><Link to="/profesori" onClick={toggleMenu}>Profesorii nostri</Link></li>
                <li><Link to="/cursuri" onClick={toggleMenu}>Cursuri</Link></li>
                <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
              </ul>
              <Link to="/inscrie-te" className="btn btn-primary book-btn" onClick={toggleMenu}>INSCRIE-TE</Link>
            </nav>

            <div className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
