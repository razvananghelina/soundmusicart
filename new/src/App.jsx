import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import TeachersPage from './pages/TeachersPage'
import TeacherProfilePage from './pages/TeacherProfilePage'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import RegisterPage from './pages/RegisterPage'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despre-noi" element={<AboutPage />} />
          <Route path="/profesori" element={<TeachersPage />} />
          <Route path="/profesori/:slug" element={<TeacherProfilePage />} />
          <Route path="/cursuri" element={<CoursesPage />} />
          <Route path="/cursuri/:slug" element={<CourseDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/inscrie-te" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
