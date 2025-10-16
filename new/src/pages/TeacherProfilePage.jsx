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
      bio: [
        'Alexandru-Cătălin Ionescu este profesor de canto, artist liric, dirijor și promotor cultural, cu o experiență de peste 18 ani în domeniul educației muzicale și al artei vocale.',
        'A absolvit Facultatea de Teologie din Pitești, Secția Pedagogie Muzicală. Între anii 2007 și 2010 a activat ca artist liric în cadrul Corului Filarmonicii din Pitești, o etapă importantă în formarea și consolidarea carierei sale artistice.',
        'Din 2008 activează în învățământ ca profesor de muzică la diferite școli din județ. Între 2021 și 2023 a susținut cursuri de inițiere vocală în cadrul Liceului de Arte „Dinu Lipatti" din Pitești, unde a ghidat și format tineri interpreți în dezvoltarea lor vocală.',
        'Este specializat în Tehnica Vocală Completă (Complete Vocal Technique) – o metodă internațională modernă de predare a vocii, pe care a studiat-o între anii 2016 și 2019. În 2024 a aprofundat tehnici expresive prin cursuri de Efecte Vocale la New York Vocal Academy.',
        'În paralel cu activitatea didactică, a dirijat peste 15 ani Corul „Orfeu" din Curtea de Argeș, ansamblu cu care a participat la numeroase festivaluri și concursuri corale atât în țară, cât și în străinătate.',
        'Din 2010 este inițiator și dirijor al Corului Mixt Novis din Pitești, proiect care îi reflectă pasiunea pentru dezvoltarea și promovarea muzicii corale.',
        'Este fondatorul Asociației Cultural-Artistice „ArpegioArt" Pitești și membru în juriile mai multor concursuri naționale. De asemenea, a fost invitat în emisiuni TV și spectacole live, contribuind activ la promovarea muzicii vocale și a educației artistice.',
        'Din 2015, este fondator și manager al Școlii de Muzică „Sound Music Art" din Pitești. Sub îndrumarea sa, cursanții au evoluat spectaculos, pregătindu-se pentru apariții în emisiuni precum SuperStar, Vocea României și X Factor, dar și pentru evenimente culturale și concursuri internaționale, de unde s-au întors cu premii importante. De-a lungul timpului, a fost invitat în juriile unor competiții naționale, contribuind activ la descoperirea și promovarea noilor talente. Prin Tehnica Vocală Completă a ajutat numeroși artiști să își rezolve problemele vocale și să își dezvolte cariera artistică.',
        'Ca dirijor sau interpret, a susținut concerte în numeroase țări, printre care România, Letonia, Serbia, Grecia, Bulgaria, Macedonia și Italia, colaborând cu diverse instituții culturale.',
        'Prin întreaga sa activitate, Ionescu Alexandru-Cătălin promovează o viziune modernă și echilibrată asupra artei vocale, bazată pe tehnică solidă, expresivitate și autenticitate.'
      ]
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
      bio: [
        'Ioana Soare este profesor de canto popular și pian. A acumulat o experiență didactică de peste 8 ani, de asemenea, se bucură să împărtășească celor mici  și celor mari tainele muzicii vocale și instrumentale.',
        'Este licențiată a Universității Naționale de Muzica din București, Facultatea de Pedagogie, Compoziție, Muzicologie – specializarea Pedagogie Muzicală;',
        'A finalizat cursurile de Master în Educație Muzicală la Universitatea Valahia din Târgoviște. De asemenea, deține și un atestat profesional pentru canto popular;',
        'A participat la numeroase concursuri și emisiuni de televiziune atât personal cat și cu elevii (canto popular și pian).',
        'Este laureată a numeroase festivaluri și concursuri (canto popular);',
        'A colaborat cu artiști de seamă ai României;',
        'A fost invitată ca membră în jurii de specialitate în cadrul concursurilor și festivalurilor de muzică pentru amatori și profesioniști din București;',
        'A avut numeroase apariții pe micul ecran în videoclipuri și'
      ]
    },
    'alexandru-florin-dicu': {
      name: 'Alexandru Florin Dicu',
      specialty: 'Prof. Pian, Orgă, Acordeon',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Florin-Dicu-1.jpg',
      bio: [
        'Alexandru Florin Dicu este profesor de pian și orgă, abordând în interpretare și predare diferite genuri muzicale destinate instrumentelor cu claviatură: muzică populară, muzică ușoară, caffe concert, etc.).',
        'Are o experiență de predare de peste 20 de ani, ca profesor de Educație Muzicală și Educație Muzicală Specializată – Orchestră.',
        'Este absolvent al Universității din Pitești, Facultatea de Teologie, secția Pedagogie Muzicală. Ulterior a absolvit și cursurile de Master în cadrul Universității din Pitești, Facultatea de Științe ale Educației.',
        'Este fondator al Asociației Culturale „Glasul Muzicii".',
        'A activat de-a lungul carierei sale ca instrumentist, colaborând cu numeroase tarafuri și orchestre de muzică populară în cadrul festivalurilor de renume din țară, dar și de peste hotare.',
        'A colaborat cu artiști de seamă ai României.',
        'A fost invitat ca membru în jurii de specialitate în cadrul concursurilor și al festivalurilor de muzică pentru amatori și profesioniști din țară.',
        'A avut numeroase apariții pe micul ecran în videoclipuri și emisiuni muzicale.'
      ]
    },
    'maria-corina-stanescu': {
      name: 'Corina Maria Stănescu',
      specialty: 'Prof. Chitară',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Corina-Stanescu.jpg',
      bio: [
        'Corina Maria Stănescu este profesor titular de chitară clasică la Liceul de Arte „Victor Giuleanu" din Râmnicu Vâlcea;',
        'Este absolventă a  Liceului de Artă „Dinu Lipatti" Pitești și a Universității „Transilvania" Brașov, Secția Pedagogie Muzicală, cu modulul de Chitară Clasică;',
        'Între anii 2007-2010 a activat ca Artist Liric la Filarmonica Pitești',
        'A fost profesor de chitară la Liceul de Muzică „Dinu Lipatti" din Pitești (2000-2003, 2023-2024)',
        'A fost profesor de chitară la Școala de Arte și Meserii din Râmnicu Vâlcea (2010-2023)',
        'Doamna profesoară aduce o vastă experiență atât în domeniul artistic, cât și în cel educațional, fiind dedicată formării elevilor și cultivării pasiunii pentru muzică. Lecțiile de chitară vor fi structurate pentru a răspunde nevoilor fiecărui elev, indiferent de nivelul lor de pregătire.',
        'Cursuri de chitară pentru toate vârstele și nivelurile.',
        'Fie că sunteți la început sau aveți deja experiență, lecțiile de chitară sub îndrumarea doamnei profesoare vor contribui la dezvoltarea abilităților muzicale ale fiecărui elev.',
        'Suntem încrezători că această nouă colaborare va aduce un plus semnificativ educației muzicale din cadrul școlii noastre și așteptăm cu interes să vedem progresul elevilor noștri.'
      ]
    },
    'aylin-ioana-udroiu': {
      name: 'Aylin Ioana Udroiu',
      specialty: 'Prof. Nai',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Aylin-Udroiu.jpg',
      bio: [
        'Aylin Ioana Udroiu este absolventă a Liceului Pedagogic ,,Carol I" și are o experiență de 4 ani în lucrul cu copiii. Are specializare ca și educator-învatator și în prezent este înscrisă la  Facultatea de Teologie, Litere, Istorie și Arte, specializarea – Muzică, unde studiază naiul sub îndrumarea doamnei profesor doctor Gina Sandu.',
        'Este membră a orchestrei ,,Doina Argeșului Junior", iar din palmaresul artistic amintim:',
        '– Trofeul „Laudatio pentru dascăli"-  iunie 2018',
        '– Trofeul „Laudatio pentru dascăli"-  iunie 2019',
        '– Trofeul „Ziua mondială a educației" – octombrie 2019',
        '– Trofeul „Unirii Principatelor Române" – ianuarie 2019',
        '– Diplomă de excelență – festivalul Johan Sebastian Bach – 2020',
        '– Premiul I – Concursul Național de Interpretare a Muzicii Românești Sigismund Toduță – 2020',
        '– Premiul I – Concursul Internațional de Interpretare „Muzica ne poate uni" – aprilie 2021',
        '– Premiul Special– Concursul Internațional de Interpretare „Muzica ne poate uni" – aprilie 2021',
        '– Premiul I – Da Capo Internațional – 2021',
        'De asemenea, a fost invitată în cadrul emisiunilor Radio-TV'
      ]
    },
    'radu-titi': {
      name: 'Radu Titi',
      specialty: 'Prof. Pian',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Radu-Titi.jpg',
      bio: [
        'Absolvent al Universităţii Transilvania, Brașov – Facultatea de Interpretare Muzicală, secția pian, Radu Titi este cunoscut în lumea muzicală argeșeană și ca dirijorul formației corale, „Ars Nova,  Gheorghe Gomoiu", Pitești, dar și ca un profesor de pian apreciat, din cadrul Liceului de Arte " Dinu Lipatti". Are un bogat palmares artistic, activând ca și colaborator al Filarmonicii Pitești de peste 15 ani, perioadă în care a susținut numeroase concerte și recitaluri alături de Orchestra Simfonică, dar și de soliști renumiți.',
        'Pe lângă activitatea concertistică, încă de la începutul carierei sale a ales să se dedice în paralel și pedagogiei, contribuind la formarea tinerilor muzicieni, fiind  implicat constant și în proiecte muzicale de excepție.'
      ]
    },
    'gila-stefan': {
      name: 'Gila Stefan',
      specialty: 'Prof. Acordeon',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Stefan-Gila.jpg',
      bio: [
        'Muzician de naționalitate română, profesor de muzică, artist instrumentist tubă al Orchestrei secției de Revistă "Constantin Zărnescu" a Teatrului Alexandru Davila din Pitești și Diacon onorific al Sfintei Arhiepiscopii a Argeșului și Muscelului.',
        'A absolvit Liceul de Arte "Dinu Lipatti" din Pitești la instrument principal tubă, după care a urmat studiile de specialitate din domeniul muzicii în cadrul Universității de Stat din Pitești , Facultatea de Teologie Ortodoxă "Sfânta Muceniță Filoteea" secția Pedagogie Muzicală , având două specializări : Pedagogie Muzicală și Metodica – Didactica Predării Instrumentului – Instrument Tubă. Licențiat în Dirijat Coral și Metodica predării muzicii.',
        'Întreaga viață a fost pasionat de Acordeon, chiar dacă de profesie nu a fost acordeonist, în măsura în care a putut a reușit să descopere tainele interpretării instrumentale cât și pedagogice a acordeonului clasic ca autodidact .',
        'A predat instrumente de suflet din alamă – tubă în cadrul Liceului de Arte Dinu Lipatti din Pitești.',
        'În cadrul Școlii Populare de Arte și Meserii din Pitești a predat acordeon afirmându-se printr-un proiect în premieră pentru pedagogia, educația, muzica și cultura interpretării instrumentale a acordeonului clasic din spațiul argeșean și piteștean – ,,Acordeon Clasic în Pitești".',
        'A participat ca membru în juriul mai multor festivaluri naționale de muzică printre care ,,Steluțe Argeșene" și "Cruce Sfântă Părăsită" organizate de SPAM.',
        'A fost timp de 6 ani membru fondator și tubist al ,,Fanfarei Argeșul".',
        'A colaborat ca artist instrumentist – tubă cu Orchestra Filarmonicii Oltenia Craiova, Corul Eufonia și ansamblul instrumental al Filarmonicii Ion Dumitrescu din Râmnicu-Vâlcea (acordeon) și cu diverse ansambluri instrumentale.',
        'A fost apreciat profesional de mari nume ale muzicii mondiale printre care Arturo Sandoval, Bob Stewart ș.a.',
        'A compus lucrări instrumentale pentru diverse instrumente precum: ,,De la viața la moarte" – tema pentru pian , ,,Dragoste pentru Arturo Sandoval" – pentru trompeta solo, ,,Tatăl Nostru" pentru solist ș.a.',
        'A fost apreciat și selectat de nume mari ale dramaturgiei românești și europene cu care a colaborat profesional ca instrumentist – tubă și acordeon în piesele regizate de Silviu Purcărete -,, Poeme" pe versuri de Mircea Dinescu , ,,Patriotica Română" în regia lui Dan Tudor , "Cu sufletul nu-i de glumit" regia Sorin Militaru . ș.a.',
        'A interpretat muzica pentru tubă scrisă de maestrul Vasile Șirli, directorul muzical al Disneyland Paris cu care a colaborat, piese pentru tubă solo compuse de profesorul său de armonie de la Pitești, Sabin Păuța.',
        'A susținut cursurile cercului de Orchestră din cadrul Clubului Copiilor din Mioveni 2021 – 2022.',
        'Din 1 Februarie 2023 activează ca artist instrumentist în proiectul pasiunii sale pentru acordeon "Ștefan Daniel Gilă International Accordion Music".'
      ]
    },
    'victor-toader': {
      name: 'Victor Toader',
      specialty: 'Prof. Tobe',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Victor-Toader.jpg',
      bio: 'Prof. Victor Toader este absolvent al Liceului de Artă „Dinu Lipatti" din Pitești, deținător al atestatului profesional în muzică și laureat al unor competiții naționale de percuție. În prezent, își continuă parcursul academic în cadrul Facultății de Muzică a Universității din Pitești și desfășoară activitate pedagogică în calitate de profesor de tobe la Școala Populară de Arte și Meserii din Pitești.'
    },
    'mihaela-lucia-pitigoi': {
      name: 'Mihaela Lucia Pitigoi',
      specialty: 'Prof. Canto Muzică Ușoară și Populară',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/Mihaela-Pitigoi.jpg',
      bio: [
        'Mihaela Lucia Pițigoi este profesor de canto muzică ușoară și populară.',
        'Este absolventă a Universității de Stat din Pitești, Facultatea de Teologie, Litere, Istorie și Arte, secția Pedagogie Muzicală. Ulterior a absolvit și cursurile de Master în cadrul Universității din Pitești, Educație Muzicală Contemporană.',
        'A câștigat numeroase premii și diplome de excelență la concursurile de specialitate, dintre care amintim:',
        '– Diploma de Excelență – cel mai bun interpret al cântecului popular argeșean, Pitești, Argeș. Oferit de către Centrul Județean pentru Conservarea și Promovarea Culturii Tradiționale Argeș, 2015',
        '– Premiul I  – Festivalul Naţional Concurs de folclor „Ponoare, Ponoare", ediţia a X-a, Ponoare, jud. Mehedinţi;',
        '– Premiul I – Festivalul Internaţional de interpretare vocală şi instrumentală „Iosiv Sivu şi Cosmin Golban", ediţia a IX-a, Timiş, 2015;',
        '– Premiul Fundației Culturale „Valeria Peter Predescu– Festivalul- Concurs Național de Interpretare a cântecului popular românesc „VALERIA PETER PREDESCU", ediția a VIII-a, Bistrița- Năsăud, 2017;',
        '–  Premiul Special – Festivalul- Concurs al Cântecului Popular Românesc „LUCREȚIA CIOBANU", ediția a II-a, Sibiu;',
        '– Participantă a Emisiunii „ O vedeta populară", TVR, sezonul I, 2017;',
        '– A reprezentat cu mândrie Argeșul, atât în țară cât și în străinătate.',
        '– Colaboratoare a Institutului Cultural Român',
        'A fost invitată ca membră în jurii de specialitate în cadrul concursurilor și al festivalurilor de muzică pentru copii!',
        'A avut numeroase apariții pe micul ecran în videoclipuri și emisiuni de specialitate!',
        'În prezent este cadru didactic învățământ preuniversitar –  catedra Educație muzicală, cu experiență didactică de peste 8 ani in lucrul cu copiii!'
      ]
    },
    'andreea-oprea': {
      name: 'Andreea Oprea',
      specialty: 'Prof. Dezvoltare Personală',
      image: 'https://soundmusicart.ro/melody/wp-content/uploads/2025/10/oprea.jpg',
      bio: [
        'Andreea Oprea este psiholog, trainer și consilier parental…',
        'Andi va susține săptămânal ateliere pentru „Inimi Curajoase", în cadrul Școlii de Muzică și Teatru „Sound Music Art" Pitești.',
        'Micii artiști, și nu numai, vor avea ocazia să își exploreze emoțiile și să învețe tehnici de relaxare. Atelierul „Inimi Curajoase" este creat cu grijă pentru copii.',
        'Fie că e vorba de o notă muzicală sau de un simplu cuvânt spus în fața altora, Andi îi va ghida pe copii să transforme emoțiile în curaj și să își exprime talentul cu naturalețe.',
        'Credem că fiecare copil este unic și are propriul ritm de dezvoltare. Într-un mediu sigur și relaxat, copiii își vor regăsi încrederea în sine și vor descoperi bucuria de a se exprima liber.',
        '𝑬𝒎𝒐𝒕̦𝒊𝒊𝒍𝒆 𝒔𝒖𝒏𝒕 𝒇𝒊𝒓𝒆𝒔̦𝒕𝒊, 𝒊𝒂𝒓 𝒂𝒖𝒕𝒆𝒏𝒕𝒊𝒄𝒊𝒕𝒂𝒕𝒆𝒂 𝒇𝒊𝒆𝒄𝒂̆𝒓𝒖𝒊 𝒄𝒐𝒑𝒊𝒍 𝒆𝒔𝒕𝒆 𝒄𝒆𝒂 𝒎𝒂𝒊 𝒇𝒓𝒖𝒎𝒐𝒂𝒔𝒂̆ 𝒇𝒐𝒓𝒎𝒂̆ 𝒅𝒆 𝒔𝒕𝒓𝒂̆𝒍𝒖𝒄𝒊𝒓𝒆. 🌟'
      ]
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
              {Array.isArray(teacher.bio) ? (
                teacher.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{teacher.bio}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeacherProfilePage
