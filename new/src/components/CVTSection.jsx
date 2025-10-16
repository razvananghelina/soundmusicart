import React, { useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import loredanaAlexVideo from '../assets/loredana_alex.mp4'
import './CVTSection.css'

const CVTSection = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="cvt-details section" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Ce este Tehnica Vocală Completă? CVT</h2>
        </div>

        <div className="cvt-details-layout">
          <div className="cvt-video-wrapper">
            <video
              ref={videoRef}
              className="cvt-video"
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play()
                    setIsPlaying(true)
                  } else {
                    videoRef.current.pause()
                    setIsPlaying(false)
                  }
                }
              }}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={loredanaAlexVideo} type="video/mp4" />
              Browser-ul tău nu suportă video HTML5.
            </video>
            {!isPlaying && (
              <div className="video-play-overlay" onClick={() => {
                if (videoRef.current) {
                  videoRef.current.play()
                  setIsPlaying(true)
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
            <h3>Dezvoltare personală</h3>
            <p>
              Pe lângă pregătirea muzicală, oferim și ateliere de dezvoltare personală sub numele <strong>"Inimi curajoase"</strong>, ce au ca scop sprijinirea emoțională și dezvoltarea încrederii de sine a elevilor. Credem că un artist împlinit este, înainte de toate, un om echilibrat și curajos, capabil să-și exprime autentic trăirile prin muzică.
            </p>
            <h3>Studio de înregistrări</h3>
            <p>
              Cursanții noștri au acces la propriul nostru studio de înregistrări, un spațiu profesional unde își pot explora creativitatea, înregistra piese, construi un portofoliu artistic și experimenta procesul muzical complet, de la idee la produs finit. Studioul este deschis și pentru colaborări între elevi, profesori sau invitați speciali, încurajând astfel lucrul în echipă și schimbul de idei artistice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CVTSection
