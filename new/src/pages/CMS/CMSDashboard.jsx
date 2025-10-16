import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiGet, API_ENDPOINTS } from '../../config/api';
import { FiBook, FiUsers, FiFileText, FiMail, FiImage } from 'react-icons/fi';
import './CMSDashboard.css';

const CMSDashboard = () => {
  const [stats, setStats] = useState({
    courses: 0,
    teachers: 0,
    blogPosts: 0,
    submissions: 0,
    heroSlides: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [courses, teachers, blogPosts, submissions, heroSlides] = await Promise.all([
        apiGet(API_ENDPOINTS.COURSES.LIST),
        apiGet(API_ENDPOINTS.TEACHERS.LIST),
        apiGet(API_ENDPOINTS.BLOG_POSTS.LIST),
        apiGet(API_ENDPOINTS.FORM_SUBMISSIONS.LIST),
        apiGet(API_ENDPOINTS.HERO_SLIDES.LIST),
      ]);

      setStats({
        courses: courses.data?.length || 0,
        teachers: teachers.data?.length || 0,
        blogPosts: blogPosts.data?.length || 0,
        submissions: submissions.data?.length || 0,
        heroSlides: heroSlides.data?.length || 0,
      });
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="cms-loading">Loading dashboard...</div>;
  }

  return (
    <div className="cms-dashboard">
      <h2>Dashboard</h2>
      <p className="cms-dashboard-subtitle">Welcome to Sound Music Art CMS</p>

      <div className="stats-grid">
        <Link to="/cms/courses" className="stat-card">
          <div className="stat-icon courses">
            <FiBook />
          </div>
          <div className="stat-info">
            <h3>{stats.courses}</h3>
            <p>Courses</p>
          </div>
        </Link>

        <Link to="/cms/teachers" className="stat-card">
          <div className="stat-icon teachers">
            <FiUsers />
          </div>
          <div className="stat-info">
            <h3>{stats.teachers}</h3>
            <p>Teachers</p>
          </div>
        </Link>

        <Link to="/cms/blog-posts" className="stat-card">
          <div className="stat-icon blog">
            <FiFileText />
          </div>
          <div className="stat-info">
            <h3>{stats.blogPosts}</h3>
            <p>Blog Posts</p>
          </div>
        </Link>

        <Link to="/cms/submissions" className="stat-card">
          <div className="stat-icon submissions">
            <FiMail />
          </div>
          <div className="stat-info">
            <h3>{stats.submissions}</h3>
            <p>Form Submissions</p>
          </div>
        </Link>

        <Link to="/cms/hero-slides" className="stat-card">
          <div className="stat-icon hero">
            <FiImage />
          </div>
          <div className="stat-info">
            <h3>{stats.heroSlides}</h3>
            <p>Hero Slides</p>
          </div>
        </Link>
      </div>

      <div className="dashboard-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <Link to="/cms/courses" className="cms-btn-action">
            Manage Courses
          </Link>
          <Link to="/cms/teachers" className="cms-btn-action">
            Manage Teachers
          </Link>
          <Link to="/cms/blog-posts" className="cms-btn-action">
            Create Blog Post
          </Link>
          <Link to="/cms/submissions" className="cms-btn-action">
            View Submissions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CMSDashboard;
