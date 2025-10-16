import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import alexCornelia from '../assets/alex_cornelia.jpg'
import loredanaVideo from '../assets/loredana.mp4'
import './About.css'

const About = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Cine suntem noi?</h2>
        </div>

        <div className="about-main">
          <div className="about-image">
            <img src={alexCornelia} alt="Alex și Cornelia - Sound Music Art" />
          </div>
          <div className="about-text">
            <p>
              Școala de muzică Sound Music Art a luat ființă în anul <strong>2015</strong> și are ca misiune formarea tinerelor talente și promovarea educației muzicale de calitate. De-alungul timpului, elevii școlii au obținut premii importante la concursuri naționale și internaționale, demonstrând nu doar pregătire tehnică ci și o reală pasiune pentru muzică.
            </p>
            <p>
              Școala oferă cursuri pentru toate vârstele și nivelurile, la instrumente precum pian, chitară, nai, tobe, vioară, orgă, precum și canto. Profesorii sunt dedicați sprijinirii fiecărui elev în dezvoltarea artistică.
            </p>
          </div>
        </div>

        <div className="cvt-intro-layout">
          <div className="cvt-intro-content">
            <p>
              Între anii 2015 și 2021, școala a fost parteneră cu <strong>Loredana Groza</strong> și Atelierul de Voce și Muzică, folosind Tehnica Vocală Completă – o metodă vocală acreditată medical în Europa, aplicabilă tuturor stilurilor muzicale.
            </p>
            <Link to="/despre-noi" className="about-read-more-btn">
              Despre noi
            </Link>
          </div>

          <div className="cvt-video-wrapper">
            <video
              ref={videoRef}
              className="cvt-video"
              onClick={handleVideoClick}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={loredanaVideo} type="video/mp4" />
              Browser-ul tău nu suportă video HTML5.
            </video>
            {!isPlaying && (
              <div className="video-play-overlay" onClick={handlePlayVideo}>
                <div className="play-button">
                  <FaPlay />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
