import React from 'react'
import { Link } from 'react-router-dom'
import alexCornelia from '../assets/alex_cornelia.jpg'
import './About.css'

const About = () => {
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
            <Link to="/despre-noi" className="about-read-more-btn">
              Despre noi
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
