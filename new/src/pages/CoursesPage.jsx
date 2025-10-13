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
import './CoursesPage.css'

const CoursesPage = () => {
  const courses = [
    {
      image: acordeonImg,
      title: 'Acordeon',
      description: 'Cursuri de acordeon pentru toate nivelurile',
      slug: 'acordeon'
    },
    {
      image: dezvoltareImg,
      title: 'Atelierele de dezvoltare personală',
      description: 'Program "Inimi curajoase" pentru dezvoltare emoțională',
      slug: 'dezvoltare-personala'
    },
    {
      image: cantoImg,
      title: 'Canto muzică ușoară/populară',
      description: 'Tehnici vocale pentru muzică ușoară și populară',
      slug: 'canto'
    },
    {
      image: chitaraImg,
      title: 'Chitară',
      description: 'Chitară acustică și electrică pentru începători și avansați',
      slug: 'chitara'
    },
    {
      image: corImg,
      title: 'COR',
      description: 'Activități corale pentru toate vârstele',
      slug: 'cor'
    },
    {
      image: naiImg,
      title: 'Nai pentru muzica populară (folclor și etno)',
      description: 'Învață să cânți la nai muzică tradițională românească',
      slug: 'nai'
    },
    {
      image: pianImg,
      title: 'Pian clasic /orgă',
      description: 'Muzică populară, muzică ușoară, caffe concert',
      slug: 'pian'
    },
    {
      image: studioImg,
      title: 'Studio de înregistrări',
      description: 'Acces la studio profesional pentru înregistrări audio/video',
      slug: 'studio'
    },
    {
      image: tobeImg,
      title: 'Tobe',
      description: 'Ritmuri și tehnici de percuție moderne',
      slug: 'tobe'
    }
  ]

  return (
    <div className="courses-page">
      <div className="page-hero">
        <div className="container">
          <h1>Cursurile Noastre</h1>
          <p>Descoperă gama completă de cursuri de muzică pentru toate vârstele și nivelurile</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <Link to={`/cursuri/${course.slug}`}>
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                  </div>
                </Link>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <Link to={`/cursuri/${course.slug}`} className="course-btn">
                    Citește mai mult
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoursesPage
