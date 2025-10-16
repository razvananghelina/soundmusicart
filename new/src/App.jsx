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

// CMS Imports
import CMSLogin from './pages/CMS/CMSLogin'
import CMSLayout from './pages/CMS/CMSLayout'
import CMSDashboard from './pages/CMS/CMSDashboard'
import CMSCourses from './pages/CMS/CMSCourses'
import CMSTeachers from './pages/CMS/CMSTeachers'
import CMSBlogPosts from './pages/CMS/CMSBlogPosts'
import CMSHeroSlides from './pages/CMS/CMSHeroSlides'
import CMSSubmissions from './pages/CMS/CMSSubmissions'
import CMSSettings from './pages/CMS/CMSSettings'

import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <div className="App">
            <Header />
            <Home />
            <Footer />
          </div>
        } />
        <Route path="/despre-noi" element={
          <div className="App">
            <Header />
            <AboutPage />
            <Footer />
          </div>
        } />
        <Route path="/profesori" element={
          <div className="App">
            <Header />
            <TeachersPage />
            <Footer />
          </div>
        } />
        <Route path="/profesori/:slug" element={
          <div className="App">
            <Header />
            <TeacherProfilePage />
            <Footer />
          </div>
        } />
        <Route path="/cursuri" element={
          <div className="App">
            <Header />
            <CoursesPage />
            <Footer />
          </div>
        } />
        <Route path="/cursuri/:slug" element={
          <div className="App">
            <Header />
            <CourseDetailPage />
            <Footer />
          </div>
        } />
        <Route path="/blog" element={
          <div className="App">
            <Header />
            <BlogPage />
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="App">
            <Header />
            <ContactPage />
            <Footer />
          </div>
        } />
        <Route path="/inscrie-te" element={
          <div className="App">
            <Header />
            <RegisterPage />
            <Footer />
          </div>
        } />

        {/* CMS Routes */}
        <Route path="/cms/login" element={<CMSLogin />} />
        <Route path="/cms" element={<CMSLayout />}>
          <Route index element={<CMSDashboard />} />
          <Route path="courses" element={<CMSCourses />} />
          <Route path="teachers" element={<CMSTeachers />} />
          <Route path="blog-posts" element={<CMSBlogPosts />} />
          <Route path="hero-slides" element={<CMSHeroSlides />} />
          <Route path="submissions" element={<CMSSubmissions />} />
          <Route path="settings" element={<CMSSettings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
