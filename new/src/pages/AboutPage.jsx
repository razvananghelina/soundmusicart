import React from 'react'
import { FaMusic, FaAward, FaHeart, FaMicrophone, FaHeadphones, FaUsers } from 'react-icons/fa'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>Despre Noi</h1>
          <p>Pasiune, dedicare și excelență în educația muzicală</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <h2>Cine suntem noi?</h2>
            <p>
              Școala de muzică Sound Music Art a luat ființă în anul <strong>2015</strong> și are ca misiune formarea tinerelor talente și promovarea educației muzicale de calitate. De-alungul timpului, elevii școlii au obținut premii importante la concursuri naționale și internaționale, demonstrând nu doar pregătire tehnică ci și o reală pasiune pentru muzică.
            </p>
            <p>
              Școala oferă cursuri pentru toate vârstele și nivelurile, la instrumente precum pian, chitară, nai, tobe, vioară, orgă, precum și canto. Profesorii sunt dedicați sprijinirii fiecărui elev în dezvoltarea artistică.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title-center">Ce oferim?</h2>
          <div className="offer-content">
            <p>
              Între anii 2015 și 2021, școala a fost parteneră cu <strong>Loredana Groza</strong> și Atelierul de Voce și Muzică, folosind Tehnica Vocală Completă – o metodă vocală acreditată medical în Europa, aplicabilă tuturor stilurilor muzicale.
            </p>
          </div>
        </div>
      </section>

      <section className="section cvt-section">
        <div className="container">
          <h2 className="section-title-center">Ce este Tehnica Vocală Completă? CVT</h2>
          <div className="cvt-content">
            <p>
              <strong>Complete Vocal Technique (CVT)</strong> este o metodă revoluționară de educație vocală, creată de vocal coach-ul danez Cathrine Sadolin, în urma a peste 25 de ani de cercetare și experiență. În România, tehnica a fost introdusă de Lucia Ciobotaru și Loredana Groza, fiind astăzi utilizată de cântăreți din toate genurile muzicale, de la începători la artiști consacrați.
            </p>
            <p>
              CVT se remarcă printr-o abordare clară și practică, oferind soluții concrete pentru orice provocare vocală, indiferent de stilul muzical – fie că este vorba despre muzică clasică, pop, rock, R&B, jazz sau metal.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Dezvoltare personală</h3>
              <p>
                Pe lângă pregătirea muzicală, oferim și ateliere de dezvoltare personală sub numele <strong>"Inimi curajoase"</strong>, ce au ca scop sprijinirea emoțională și dezvoltarea încrederii de sine a elevilor. Credem că un artist împlinit este, înainte de toate, un om echilibrat și curajos, capabil să-și exprime autentic trăirile prin muzică.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
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
    </div>
  )
}

export default AboutPage
