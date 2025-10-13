import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import acordeonImg from '../assets/acordeon.jpg'
import dezvoltareImg from '../assets/dezvoltare_personala.jpg'
import cantoImg from '../assets/canto.jpg'
import chitaraImg from '../assets/chitara.jpg'
import corImg from '../assets/cor.jpg'
import naiImg from '../assets/nai.jpg'
import pianImg from '../assets/pian.jpg'
import studioImg from '../assets/studio_inregistrari.jpg'
import tobeImg from '../assets/tobe.jpg'
import './CourseDetailPage.css'

const CourseDetailPage = () => {
  const { slug } = useParams()

  const coursesData = {
    'acordeon': {
      title: 'Acordeon',
      image: acordeonImg,
      description: 'Cursuri de acordeon pentru toate nivelurile',
      details: 'Acordeonul este un instrument versatil, folosit în diverse stiluri muzicale. La Sound Music Art, oferim cursuri personalizate pentru toate vârstele și nivelurile de pregătire.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'dezvoltare-personala': {
      title: 'Atelierele de dezvoltare personală',
      image: dezvoltareImg,
      description: 'Program "Inimi curajoase"',
      details: 'Pe lângă pregătirea muzicală, oferim și ateliere de dezvoltare personală sub numele "Inimi curajoase", ce au ca scop sprijinirea emoțională și dezvoltarea încrederii de sine a elevilor.',
      duration: 'Sesiuni de grup',
      level: 'Toate vârstele'
    },
    'canto': {
      title: 'Canto muzică ușoară/populară',
      image: cantoImg,
      description: 'Tehnici vocale moderne',
      details: 'Cursurile de canto acoperă tehnici vocale pentru muzică ușoară și populară, folosind metode moderne de educație vocală, inclusiv CVT (Complete Vocal Technique).',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'chitara': {
      title: 'Chitară',
      image: chitaraImg,
      description: 'Chitară acustică și electrică',
      details: 'Învățăm tehnici de chitară acustică și electrică pentru diverse stiluri muzicale. De la acorduri de bază până la tehnici avansate de solo.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'cor': {
      title: 'COR',
      image: corImg,
      description: 'Activități corale',
      details: 'Participarea în cor dezvoltă abilitățile vocale, auzul muzical și spiritul de echipă. Repertoriul include piese clasice și moderne.',
      duration: 'Repetiții săptămânale',
      level: 'Toate nivelurile'
    },
    'nai': {
      title: 'Nai pentru muzica populară',
      image: naiImg,
      description: 'Muzică tradițională românească',
      details: 'Naiul este un instrument tradițional românesc. Cursurile noastre acoperă tehnici specifice pentru muzica folclorică și etno.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'pian': {
      title: 'Pian clasic /orgă',
      image: pianImg,
      description: 'Tehnici clasice și moderne',
      details: 'Cursuri de pian și orgă pentru toate nivelurile, acoperind repertoriu clasic, muzică ușoară și caffe concert.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'studio': {
      title: 'Studio de înregistrări',
      image: studioImg,
      description: 'Studio profesional',
      details: 'Cursanții noștri au acces la propriul nostru studio de înregistrări, un spațiu profesional unde își pot explora creativitatea și înregistra piese.',
      duration: 'Sesiuni flexibile',
      level: 'Cursanți activi'
    },
    'tobe': {
      title: 'Tobe',
      image: tobeImg,
      description: 'Percuție și ritm',
      details: 'Cursuri de tobe pentru dezvoltarea tehnicii ritmice și coordonarea motorie. Învățăm diverse stiluri: rock, jazz, pop, funk.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    }
  }

  const course = coursesData[slug]

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="page-hero">
          <div className="container">
            <h1>Curs negăsit</h1>
          </div>
        </div>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Cursuri', link: '/cursuri' },
    { label: course.title }
  ]

  return (
    <div className="course-detail-page">
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="course-detail-content">
            <div className="course-detail-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-detail-info">
              <h2>Despre curs</h2>
              <p>{course.details}</p>

              <div className="course-meta">
                <div className="course-meta-item">
                  <strong>Durată lecție:</strong>
                  <span>{course.duration}</span>
                </div>
                <div className="course-meta-item">
                  <strong>Nivel:</strong>
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="course-actions">
                <Link to="/inscrie-te" className="btn btn-primary">Înscrie-te acum</Link>
                <Link to="/contact" className="btn btn-secondary">Contactează-ne</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetailPage
