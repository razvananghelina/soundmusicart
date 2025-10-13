import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight, FaHome } from 'react-icons/fa'
import './Breadcrumbs.css'

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link to="/">
            <FaHome />
            <span>Acasă</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <FaChevronRight className="breadcrumb-separator" />
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
