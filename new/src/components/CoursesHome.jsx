import React from 'react'
import { Link } from 'react-router-dom'
import acordeonImg from '../assets/acordeon.jpg'
import dezvoltareImg from '../assets/dezvoltare_personala.jpg'
import cantoImg from '../assets/canto.jpg'
import chitaraImg from '../assets/chitara.jpg'
import corImg from '../assets/cor.jpg'
import naiImg from '../assets/nai.jpg'
import pianImg from '../assets/pian.jpg'
import studioImg from '../assets/studio_inregistrari.jpg'
import tobeImg from '../assets/tobe.jpg'
import './CoursesHome.css'

const CoursesHome = () => {
  const courses = [
    { image: acordeonImg, title: 'Acordeon', slug: 'acordeon', showOnHome: false },
    { image: dezvoltareImg, title: 'Atelierele de dezvoltare personală', slug: 'dezvoltare-personala', showOnHome: false },
    { image: cantoImg, title: 'Canto muzică ușoară/populară', slug: 'canto', showOnHome: true },
    { image: chitaraImg, title: 'Chitară', slug: 'chitara', showOnHome: true },
    { image: corImg, title: 'COR', slug: 'cor', showOnHome: false },
    { image: naiImg, title: 'Nai pentru muzica populară (folclor și etno)', slug: 'nai', showOnHome: false },
    { image: pianImg, title: 'Pian clasic /orgă', slug: 'pian', showOnHome: true },
    { image: studioImg, title: 'Studio de înregistrări', slug: 'studio', showOnHome: false },
    { image: tobeImg, title: 'Tobe', slug: 'tobe', showOnHome: false }
  ]

  return (
    <section className="courses-home section" id="courses-home">
      <div className="container">
        <div className="section-title">
          <h2>Cursurile noastre</h2>
        </div>

        <div className="courses-home-grid">
          {courses.map((course, index) => (
            <div key={index} className={`course-home-card ${!course.showOnHome ? 'course-hidden' : ''}`}>
              <Link to={`/cursuri/${course.slug}`}>
                <div className="course-home-image">
                  <img src={course.image} alt={course.title} />
                </div>
              </Link>
              <h3>{course.title}</h3>
              <Link to={`/cursuri/${course.slug}`} className="course-home-link">Citește mai mult</Link>
            </div>
          ))}
        </div>

        <div className="courses-home-cta">
          <Link to="/cursuri" className="btn btn-primary">Vezi toate cursurile</Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesHome
