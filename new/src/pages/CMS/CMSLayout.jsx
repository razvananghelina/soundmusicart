import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { apiGet, API_ENDPOINTS } from '../../config/api';
import {
  FiHome, FiBook, FiUsers, FiFileText, FiImage,
  FiMail, FiSettings, FiLogOut, FiMenu, FiX
} from 'react-icons/fi';
import './CMSLayout.css';

const CMSLayout = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('cms_token');
    if (!token) {
      navigate('/cms/login');
      return;
    }

    try {
      const response = await apiGet(API_ENDPOINTS.AUTH.CHECK);
      if (response.success) {
        setUser(response.data.user);
      } else {
        localStorage.removeItem('cms_token');
        localStorage.removeItem('cms_user');
        navigate('/cms/login');
      }
    } catch (err) {
      localStorage.removeItem('cms_token');
      localStorage.removeItem('cms_user');
      navigate('/cms/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('cms_token');
    localStorage.removeItem('cms_user');
    navigate('/cms/login');
  };

  if (!user) {
    return <div className="cms-loading">Loading...</div>;
  }

  return (
    <div className="cms-layout">
      <aside className={`cms-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="cms-sidebar-header">
          <h2>Sound Music Art</h2>
          <p>CMS Panel</p>
        </div>

        <nav className="cms-nav">
          <NavLink to="/cms" end className={({ isActive }) => isActive ? 'active' : ''}>
            <FiHome /> Dashboard
          </NavLink>
          <NavLink to="/cms/courses" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiBook /> Courses
          </NavLink>
          <NavLink to="/cms/teachers" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiUsers /> Teachers
          </NavLink>
          <NavLink to="/cms/blog-posts" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiFileText /> Blog Posts
          </NavLink>
          <NavLink to="/cms/hero-slides" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiImage /> Hero Slides
          </NavLink>
          <NavLink to="/cms/submissions" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiMail /> Form Submissions
          </NavLink>
          <NavLink to="/cms/settings" className={({ isActive }) => isActive ? 'active' : ''}>
            <FiSettings /> Settings
          </NavLink>
        </nav>

        <div className="cms-sidebar-footer">
          <div className="cms-user-info">
            <p className="cms-user-name">{user.first_name} {user.last_name}</p>
            <p className="cms-user-role">{user.role}</p>
          </div>
          <button onClick={handleLogout} className="cms-btn-logout">
            <FiLogOut /> Logout
          </button>
        </div>
      </aside>

      <div className="cms-main">
        <header className="cms-header">
          <button
            className="cms-btn-toggle-sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>
          <h1>Content Management System</h1>
        </header>

        <main className="cms-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CMSLayout;
