import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import CoursesHome from '../components/CoursesHome'
import CVTSection from '../components/CVTSection'
import ExtraServices from '../components/ExtraServices'
import Stats from '../components/Stats'
import MapSection from '../components/MapSection'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <CoursesHome />
      <CVTSection />
      <ExtraServices />
      <Stats />
      <MapSection />
    </div>
  )
}

export default Home
