import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import './Teachers.css'

const Teachers = () => {
  const teachers = [
    {
      name: 'Alexandru Cătălin Ionescu',
      specialty: 'Manager, Prof. Canto, Dirijor',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2016/05/Alex.jpg',
      slug: 'alexandru-catalin-ionescu'
    },
    {
      name: 'Cornelia Ionescu',
      specialty: 'Manager, Prof. Pian, Dirijor',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Eu.jpg',
      slug: 'cornelia-ionescu'
    },
    {
      name: 'Soare Ioana',
      specialty: 'Manager, Prof. Canto, Dirijor',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Soare-Ioana.jpg',
      slug: 'ioana-soare'
    },
    {
      name: 'Alexandru Florin Dicu',
      specialty: 'Prof. Pian, Orgă, Acordeon',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Florin-Dicu-1.jpg',
      slug: 'alexandru-florin-dicu'
    },
    {
      name: 'Corina Maria Stănescu',
      specialty: 'Prof. Chitară',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Corina-Stanescu.jpg',
      slug: 'maria-corina-stanescu'
    },
    {
      name: 'Aylin Ioana Udroiu',
      specialty: 'Prof. Nai',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Aylin-Udroiu.jpg',
      slug: 'aylin-ioana-udroiu'
    },
    {
      name: 'Radu Titi',
      specialty: 'Prof. Pian',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Radu-Titi.jpg',
      slug: 'radu-titi'
    },
    {
      name: 'Gila Stefan',
      specialty: 'Prof. Acordeon',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Stefan-Gila.jpg',
      slug: 'gila-stefan'
    },
    {
      name: 'Victor Toader',
      specialty: 'Prof. Tobe',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Victor-Toader.jpg',
      slug: 'victor-toader'
    },
    {
      name: 'Mihaela Lucia Pitigoi',
      specialty: 'Prof. Canto Muzică Ușoară și Populară',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Mihaela-Pitigoi.jpg',
      slug: 'mihaela-lucia-pitigoi'
    },
    {
      name: 'Andreea Oprea',
      specialty: 'Prof. Dezvoltare Personală',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/oprea.jpg',
      slug: 'andreea-oprea'
    }
  ]

  return (
    <section className="teachers section" id="teachers">
      <div className="container">
        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <div key={index} className="teacher-card">
              <Link to={`/profesori/${teacher.slug}`} className="teacher-link">
                <div className="teacher-image-wrapper">
                  <img src={teacher.image} alt={teacher.name} className="teacher-image" />
                </div>
              </Link>
              <div className="teacher-info">
                <Link to={`/profesori/${teacher.slug}`} className="teacher-name-link">
                  <h3 className="teacher-name">{teacher.name}</h3>
                </Link>
                <p className="teacher-specialty">{teacher.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teachers
