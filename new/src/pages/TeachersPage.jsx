import React from 'react'
import Teachers from '../components/Teachers'
import './TeachersPage.css'

const TeachersPage = () => {
  return (
    <div className="teachers-page">
      <div className="page-hero">
        <div className="container">
          <h1>Profesorii Noștri</h1>
          <p>Echipa noastră de muzicieni profesioniști și profesori dedicați</p>
        </div>
      </div>

      <Teachers />
    </div>
  )
}

export default TeachersPage
