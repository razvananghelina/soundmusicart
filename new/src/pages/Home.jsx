import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import CoursesHome from '../components/CoursesHome'
import CVTSection from '../components/CVTSection'
import Stats from '../components/Stats'
import MapSection from '../components/MapSection'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Features />
      <CoursesHome />
      <CVTSection />
      <Stats />
      <MapSection />
    </div>
  )
}

export default Home
