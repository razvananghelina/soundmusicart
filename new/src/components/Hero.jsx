import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Hero.css'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Bine ai venit la Sound Music Art',
      subtitle: 'Locul unde pasiunea pentru muzică prinde viață!',
      buttonText: 'CURSURI',
      bgImage: slider1
    },
    {
      title: 'Bine ai venit la Sound Music Art',
      subtitle: 'Locul unde pasiunea pentru muzică prinde viață!',
      buttonText: 'CURSURI',
      bgImage: slider2
    },
    {
      title: 'Bine ai venit la Sound Music Art',
      subtitle: 'Locul unde pasiunea pentru muzică prinde viață!',
      buttonText: 'CURSURI',
      bgImage: slider3
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <button className="btn btn-outline">{slide.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero
