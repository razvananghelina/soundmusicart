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
      details: 'Cursurile noastre de acordeon sunt deschise tuturor celor care vor să învețe un instrument expresiv și versatil. Lucrăm cu elevi de toate vârstele, indiferent de nivelul de experiență, și personalizăm lecțiile în funcție de obiectivele și stilul fiecăruia. Indiferent dacă ești începător sau ai deja experiență, te vom ghida pas cu pas într-un mod clar, relaxat și eficient.\n\nProfesorii noștri te vor ajuta să înveți corect tehnica, să îți dezvolți expresivitatea și să interpretezi cu plăcere piese din diverse genuri muzicale – de la muzică populară, clasică sau de petrecere, până la jazz și muzică contemporană.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'dezvoltare-personala': {
      title: 'Atelierele de dezvoltare personală',
      image: dezvoltareImg,
      description: 'Program "Inimi curajoase"',
      details: 'La Sound Music Art credem că arta și emoția merg mână în mână. De aceea, te invităm să participi la atelierele noastre intitulate "Inimi Curajoase" – ateliere speciale de dezvoltare personală pentru copii și adolescenți, menite să îi ajute în parcursul lor muzical, să fie echilibrați și autentici. Micii artiști, și nu numai, vor avea ocazia să își exploreze emoțiile și să învețe tehnici de relaxare. Fie că e vorba de o notă muzicală sau de un simplu cuvânt spus în fața altora, îi vom ghida pe copii să transforme emoțiile în curaj și să își exprime talentul cu naturalețe.',
      duration: 'Sesiuni de grup săptămânale',
      level: 'Copii și adolescenți'
    },
    'canto': {
      title: 'Canto muzică ușoară/populară',
      image: cantoImg,
      description: 'Tehnici vocale moderne',
      details: 'Cursurile de canto oferă beneficii complete pentru dezvoltarea vocii și tehnicii muzicale: îmbunătățirea tehnicii vocale (respirație corectă, rezonanță, dicție, poziționare corporală), controlul vocii pentru o interpretare sigură, extinderea registrului vocal, și dezvoltarea auzului muzical. Pe plan artistic și personal, cursurile îți cresc încrederea în sine prin cântatul în fața altora, dezvoltă expresivitatea și interpretarea, oferă potențial pentru dezvoltarea carierei artistice, și te ajută să înveți repertoriul potrivit stilului tău vocal. Muzica ușoară se concentrează pe emoție și diversitate stilistică (pop, rock, soul), necesitând o voce versatilă, în timp ce muzica populară se bazează pe tradiție, cu stil interpretativ specific (ornamente vocale, dialect), exprimând legătura cu folclorul și cultura locală.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'chitara': {
      title: 'Chitară',
      image: chitaraImg,
      description: 'Chitară acustică și electrică',
      details: 'Cursul oferă două direcții principale: chitară clasică (cu corzi de nailon, focalizată pe note individuale și poziționarea corectă a mâinilor, dezvoltând disciplină tehnică și interpretare expresivă, cu repertoriu clasic și modern) și chitară populară/ușoară (pe chitară acustică cu corzi metalice, axată pe acorduri, acompaniament vocal și ritmică, potrivită pentru folk, pop, rock acustic, oferind exprimare creativă și interacțiune socială). Beneficiile generale includ: dezvoltare muzicală (îmbunătățirea coordonării mâinilor, dezvoltarea auzului muzical și a ritmului, învățarea notației muzicale și tablaturilor, capacitatea de a improviza și acompania) și dezvoltare personală (construirea încrederii în sine, exprimarea emoțională, stimularea creativității, posibilitatea de a face muzică în grup).',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'cor': {
      title: 'COR',
      image: corImg,
      description: 'Activități corale',
      details: 'Cursurile de cor sunt deschise tuturor – copii, adolescenți și adulți – indiferent de experiență. Fie că ai mai cântat într-un cor sau este prima dată când îți dorești să faci acest pas, vei fi întâmpinat cu entuziasm și sprijin. Cursurile de cor se adresează în special copiilor cu vârste cuprinse între 9-13 ani. Participanții își vor dezvolta vocea, vor învăța să cânte corect și vor face parte dintr-o echipă. Îi invităm pe toți cei interesați la o sesiune de probă gratuită pentru a face primul pas într-o experiență muzicală care va dezvolta încrederea în sine și spiritul de echipă.',
      duration: 'Repetiții săptămânale',
      level: 'Copii (9-13 ani), adolescenți și adulți'
    },
    'nai': {
      title: 'Nai pentru muzica populară',
      image: naiImg,
      description: 'Muzică tradițională românească',
      details: 'Cursul oferă trei direcții principale de învățare: 1) Muzică populară și etno (învățarea melodiilor tradiționale, ornamentații specifice folclorului precum vibrato și trillo, tehnici de improvizație, repertoriu incluzând doine, balade, cântece de nuntă și hore, ajutând la înțelegerea tradițiilor și valorilor culturale, potrivit pentru ansambluri populare și evenimente tradiționale); 2) Muzică ușoară/pop (învățarea stilurilor contemporane pop, rock, jazz, adaptarea naiului la genuri muzicale moderne, explorarea acordurilor simple și improvizației, repertoriu incluzând piese populare și coveruri, adăugând un sunet unic muzicii contemporane, ideal pentru interpretări solo și colaborări); 3) Muzică clasică (învățarea tehnicilor pentru piese clasice și adaptări, focus pe fraze muzicale lungi și control dinamic, dezvoltarea abilităților riguroase de interpretare, potențial pentru participare în orchestre sau ansambluri de cameră, înțelegerea aprofundată a muzicii clasice).',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'pian': {
      title: 'Pian clasic /orgă',
      image: pianImg,
      description: 'Tehnici clasice și moderne',
      details: 'Cursul oferă pregătire în pian și orgă pentru multiple stiluri muzicale, cu beneficii incluzând: dezvoltare tehnică (îmbunătățirea coordonării mâinilor, dezvoltarea auzului muzical, citirea partiturilor, dezvoltarea memoriei muzicale) și creștere personală (disciplină și răbdare, creativitate și improvizație, construirea încrederii). Stilurile specializate includ: 1) Pian clasic (focus pe repertoriu baroc, clasic și romantic); 2) Pian/orgă muzică ușoară (accent pe acompaniament și improvizație); 3) Pian/orgă muzică populară (concentrare pe ritmuri tradiționale și acompaniament); 4) Stil Cafe Concert (abordare elegantă, instrumentală, pentru crearea unei ambianțe sofisticate). Cursul este potrivit pentru diverse obiective: dezvoltarea unei baze muzicale solide, învățarea să cânți în trupe sau la evenimente, sau crearea de atmosfere muzicale rafinate.',
      duration: 'Lecții de 45-60 minute',
      level: 'Începători, Intermediari, Avansați'
    },
    'studio': {
      title: 'Studio de înregistrări',
      image: studioImg,
      description: 'Studio profesional',
      details: 'Cursanții noștri au acces la propriul nostru studio de înregistrări, un spațiu profesional unde își pot explora creativitatea, înregistra piese, construi un portofoliu artistic și experimenta procesul muzical complet, de la idee la produs finit. Studioul este deschis și pentru colaborări între elevi, profesori sau invitați speciali, încurajând astfel lucrul în echipă și schimbul de idei artistice. Este locația perfectă pentru a transforma pasiunea muzicală în rezultate concrete și profesionale.',
      duration: 'Sesiuni flexibile',
      level: 'Cursanți activi'
    },
    'tobe': {
      title: 'Tobe',
      image: tobeImg,
      description: 'Percuție și ritm',
      details: 'Dacă ești pasionat de ritm și vrei să înveți să cânți la tobe, te așteptăm cu lecții potrivite pentru orice vârstă și nivel. Cursurile oferă o abordare clară și practică, cu instruire personalizată care te ajută să înveți pas cu pas să dezvolți tehnica de ritm, coordonarea și expresivitatea la tobe. Oferim o sesiune gratuită de testare pentru a determina programul de studiu cel mai potrivit pentru tine. Indiferent dacă ești începător sau avansat, profesorul dedicat te va ghida în dezvoltarea abilităților tale la tobe, asigurându-se că vei evolua constant și vei descoperi bucuria de a cânta la acest instrument dinamic.',
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
