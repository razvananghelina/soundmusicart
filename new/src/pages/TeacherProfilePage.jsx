import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import './TeacherProfilePage.css'

const TeacherProfilePage = () => {
  const { slug } = useParams()

  // Date pentru profesori
  const teachersData = {
    'alexandru-catalin-ionescu': {
      name: 'Alexandru Cătălin Ionescu',
      specialty: 'Manager, Prof. Canto, Dirijor',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2016/05/Alex.jpg',
      bio: 'Profesor de canto și dirijor cu experiență vastă în educația muzicală.'
    },
    'cornelia-ionescu': {
      name: 'Cornelia Ionescu',
      specialty: 'Manager, Prof. Pian, Dirijor',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Eu.jpg',
      bio: 'Profesor de pian și dirijor cu dedicare pentru formarea tinerelor talente.'
    },
    'ioana-soare': {
      name: 'Soare Ioana',
      specialty: 'Manager, Prof. Canto, Dirijor',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Soare-Ioana.jpg',
      bio: 'Profesor de canto cu experiență în pregătirea vocală pentru diverse stiluri muzicale.'
    },
    'alexandru-florin-dicu': {
      name: 'Alexandru Florin Dicu',
      specialty: 'Prof. Pian, Orgă, Acordeon',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Florin-Dicu-1.jpg',
      bio: 'Profesor versatil cu experiență la pian, orgă și acordeon.'
    },
    'maria-corina-stanescu': {
      name: 'Corina Maria Stănescu',
      specialty: 'Prof. Chitară',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Corina-Stanescu.jpg',
      bio: 'Profesor de chitară specializat în diverse tehnici și stiluri.'
    },
    'aylin-ioana-udroiu': {
      name: 'Aylin Ioana Udroiu',
      specialty: 'Prof. Nai',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Aylin-Udroiu.jpg',
      bio: 'Profesor de nai dedicat promovării muzicii tradiționale românești.'
    },
    'radu-titi': {
      name: 'Radu Titi',
      specialty: 'Prof. Pian',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Radu-Titi.jpg',
      bio: 'Profesor de pian cu experiență în muzică clasică și contemporană.'
    },
    'gila-stefan': {
      name: 'Gila Stefan',
      specialty: 'Prof. Acordeon',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Stefan-Gila.jpg',
      bio: 'Profesor de acordeon cu experiență în muzică populară și clasică.'
    },
    'victor-toader': {
      name: 'Victor Toader',
      specialty: 'Prof. Tobe',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Victor-Toader.jpg',
      bio: 'Profesor de tobe cu experiență în diverse stiluri ritmice.'
    },
    'mihaela-lucia-pitigoi': {
      name: 'Mihaela Lucia Pitigoi',
      specialty: 'Prof. Canto Muzică Ușoară și Populară',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Mihaela-Pitigoi.jpg',
      bio: 'Profesor de canto specializat în muzică ușoară și populară.'
    },
    'andreea-oprea': {
      name: 'Andreea Oprea',
      specialty: 'Prof. Dezvoltare Personală',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/oprea.jpg',
      bio: 'Facilitator pentru ateliere de dezvoltare personală "Inimi curajoase".'
    }
  }

  const teacher = teachersData[slug]

  if (!teacher) {
    return (
      <div className="teacher-profile-page">
        <div className="page-hero">
          <div className="container">
            <h1>Profesor negăsit</h1>
          </div>
        </div>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Profesori', link: '/profesori' },
    { label: teacher.name }
  ]

  return (
    <div className="teacher-profile-page">
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>{teacher.name}</h1>
          <p>{teacher.specialty}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="teacher-profile-content">
            <div className="teacher-profile-image">
              <img src={teacher.image} alt={teacher.name} />
            </div>
            <div className="teacher-profile-info">
              <h2>Despre</h2>
              <p>{teacher.bio}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeacherProfilePage
