import React, { useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import loredanaVideo from '../assets/loredana.mp4'
import loredanaAlexVideo from '../assets/loredana_alex.mp4'
import './CVTSection.css'

const CVTSection = () => {
  const videoRef = useRef(null)
  const videoRef2 = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)

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
    <>
      <section className="cvt-intro section">
        <div className="container">
          <div className="section-title">
            <h2>Ce oferim?</h2>
          </div>

          <div className="cvt-intro-layout">
            <div className="cvt-intro-content">
              <p>
                Între anii 2015 și 2021, școala a fost parteneră cu <strong>Loredana Groza</strong> și Atelierul de Voce și Muzică, folosind Tehnica Vocală Completă – o metodă vocală acreditată medical în Europa, aplicabilă tuturor stilurilor muzicale.
              </p>
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

      <section className="cvt-details section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Ce este Tehnica Vocală Completă? CVT</h2>
          </div>

          <div className="cvt-details-layout">
            <div className="cvt-video-wrapper">
              <video
                ref={videoRef2}
                className="cvt-video"
                onClick={() => {
                  if (videoRef2.current) {
                    if (videoRef2.current.paused) {
                      videoRef2.current.play()
                      setIsPlaying2(true)
                    } else {
                      videoRef2.current.pause()
                      setIsPlaying2(false)
                    }
                  }
                }}
                onEnded={() => setIsPlaying2(false)}
              >
                <source src={loredanaAlexVideo} type="video/mp4" />
                Browser-ul tău nu suportă video HTML5.
              </video>
              {!isPlaying2 && (
                <div className="video-play-overlay" onClick={() => {
                  if (videoRef2.current) {
                    videoRef2.current.play()
                    setIsPlaying2(true)
                  }
                }}>
                  <div className="play-button">
                    <FaPlay />
                  </div>
                </div>
              )}
            </div>

            <div className="cvt-content">
              <p>
                <strong>Complete Vocal Technique (CVT)</strong> este o metodă revoluționară de educație vocală, creată de vocal coach-ul danez Cathrine Sadolin, în urma a peste 25 de ani de cercetare și experiență. În România, tehnica a fost introdusă de Lucia Ciobotaru și Loredana Groza, fiind astăzi utilizată de cântăreți din toate genurile muzicale, de la începători la artiști consacrați.
              </p>
              <p>
                CVT se remarcă printr-o abordare clară și practică, oferind soluții concrete pentru orice provocare vocală, indiferent de stilul muzical – fie că este vorba despre muzică clasică, pop, rock, R&B, jazz sau metal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CVTSection
