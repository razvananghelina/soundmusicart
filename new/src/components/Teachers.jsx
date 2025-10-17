import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import alexImg from '../assets/alex.jpg'
import corneliaImg from '../assets/cornelia.jpg'
import ioanaSoareImg from '../assets/ioana_soare.jpg'
import florinDicuImg from '../assets/florin_dicu.jpg'
import corinaStanescuImg from '../assets/corina_stanescu.jpg'
import aylinUdroiuImg from '../assets/aylin_udroiu.jpg'
import raduTitiImg from '../assets/radu_titi.jpg'
import stefanGilaImg from '../assets/stefan_gila.jpg'
import victorToaderImg from '../assets/victor_toader.jpg'
import mihaelaPitigoiImg from '../assets/mihaela_pitigoi.jpg'
import andreeaOpreaImg from '../assets/andreea_oprea.jpg'
import './Teachers.css'

const Teachers = () => {
  const teachers = [
    {
      name: 'Alexandru Cătălin Ionescu',
      specialty: 'Manager, Prof. Canto, Dirijor',
      image: alexImg,
      slug: 'alexandru-catalin-ionescu'
    },
    {
      name: 'Cornelia Ionescu',
      specialty: 'Manager, Prof. Pian, Dirijor',
      image: corneliaImg,
      slug: 'cornelia-ionescu'
    },
    {
      name: 'Soare Ioana',
      specialty: 'Manager, Prof. Canto, Dirijor',
      image: ioanaSoareImg,
      slug: 'ioana-soare'
    },
    {
      name: 'Alexandru Florin Dicu',
      specialty: 'Prof. Pian, Orgă, Acordeon',
      image: florinDicuImg,
      slug: 'alexandru-florin-dicu'
    },
    {
      name: 'Corina Maria Stănescu',
      specialty: 'Prof. Chitară',
      image: corinaStanescuImg,
      slug: 'maria-corina-stanescu'
    },
    {
      name: 'Aylin Ioana Udroiu',
      specialty: 'Prof. Nai',
      image: aylinUdroiuImg,
      slug: 'aylin-ioana-udroiu'
    },
    {
      name: 'Radu Titi',
      specialty: 'Prof. Pian',
      image: raduTitiImg,
      slug: 'radu-titi'
    },
    {
      name: 'Gila Stefan',
      specialty: 'Prof. Acordeon',
      image: stefanGilaImg,
      slug: 'gila-stefan'
    },
    {
      name: 'Victor Toader',
      specialty: 'Prof. Tobe',
      image: victorToaderImg,
      slug: 'victor-toader'
    },
    {
      name: 'Mihaela Lucia Pitigoi',
      specialty: 'Prof. Canto Muzică Ușoară și Populară',
      image: mihaelaPitigoiImg,
      slug: 'mihaela-lucia-pitigoi'
    },
    {
      name: 'Andreea Oprea',
      specialty: 'Prof. Dezvoltare Personală',
      image: andreeaOpreaImg,
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
