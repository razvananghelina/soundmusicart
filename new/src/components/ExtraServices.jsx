import React from 'react'
import { FaUsers, FaHeadphones } from 'react-icons/fa'
import './ExtraServices.css'

const ExtraServices = () => {
  return (
    <section className="extra-services section">
      <div className="container">
        <div className="extra-services-grid">
          <div className="extra-service-card">
            <div className="extra-service-icon">
              <FaUsers />
            </div>
            <h3>Dezvoltare personală</h3>
            <p>
              Pe lângă pregătirea muzicală, oferim și ateliere de dezvoltare personală sub numele <strong>"Inimi curajoase"</strong>, ce au ca scop sprijinirea emoțională și dezvoltarea încrederii de sine a elevilor. Credem că un artist împlinit este, înainte de toate, un om echilibrat și curajos, capabil să-și exprime autentic trăirile prin muzică.
            </p>
          </div>

          <div className="extra-service-card">
            <div className="extra-service-icon">
              <FaHeadphones />
            </div>
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

export default ExtraServices
