import React, { useEffect, useState } from 'react';
import { apiGet, apiPost, apiPut, apiDelete, API_ENDPOINTS } from '../../config/api';
import { FiEdit2, FiTrash2, FiPlus, FiX } from 'react-icons/fi';
import './CMSPages.css';

const CMSCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    full_details: '',
    featured_image: '',
    duration: '',
    level: '',
    show_on_home: false,
    display_order: 0,
    status: 'active',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await apiGet(API_ENDPOINTS.COURSES.LIST);
      if (response.success) {
        setCourses(response.data || []);
      }
    } catch (err) {
      alert('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (course = null) => {
    if (course) {
      setEditingCourse(course);
      setFormData(course);
    } else {
      setEditingCourse(null);
      setFormData({
        slug: '',
        title: '',
        description: '',
        full_details: '',
        featured_image: '',
        duration: '',
        level: '',
        show_on_home: false,
        display_order: 0,
        status: 'active',
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCourse(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingCourse) {
        const response = await apiPut(
          `${API_ENDPOINTS.COURSES.UPDATE}?id=${editingCourse.id}`,
          formData
        );
        if (response.success) {
          alert('Course updated successfully');
          fetchCourses();
          handleCloseModal();
        }
      } else {
        const response = await apiPost(API_ENDPOINTS.COURSES.CREATE, formData);
        if (response.success) {
          alert('Course created successfully');
          fetchCourses();
          handleCloseModal();
        }
      }
    } catch (err) {
      alert(err.message || 'Failed to save course');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this course?')) {
      return;
    }

    try {
      const response = await apiDelete(`${API_ENDPOINTS.COURSES.DELETE}?id=${id}`);
      if (response.success) {
        alert('Course deleted successfully');
        fetchCourses();
      }
    } catch (err) {
      alert(err.message || 'Failed to delete course');
    }
  };

  if (loading) {
    return <div className="cms-loading">Loading courses...</div>;
  }

  return (
    <div className="cms-page">
      <div className="cms-page-header">
        <h2>Manage Courses</h2>
        <button onClick={() => handleOpenModal()} className="cms-btn-primary">
          <FiPlus /> Add Course
        </button>
      </div>

      <div className="cms-table-container">
        <table className="cms-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Show on Home</th>
              <th>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  No courses found
                </td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.slug}</td>
                  <td>
                    <span className={`status-badge ${course.status}`}>
                      {course.status}
                    </span>
                  </td>
                  <td>{course.show_on_home ? 'Yes' : 'No'}</td>
                  <td>{course.display_order}</td>
                  <td className="actions">
                    <button
                      onClick={() => handleOpenModal(course)}
                      className="cms-btn-icon edit"
                      title="Edit"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="cms-btn-icon delete"
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="cms-modal-overlay" onClick={handleCloseModal}>
          <div className="cms-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cms-modal-header">
              <h3>{editingCourse ? 'Edit Course' : 'Add Course'}</h3>
              <button onClick={handleCloseModal} className="cms-btn-close">
                <FiX />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="cms-form">
              <div className="cms-form-row">
                <div className="cms-form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="cms-form-group">
                  <label>Slug *</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="cms-form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                />
              </div>

              <div className="cms-form-group">
                <label>Full Details</label>
                <textarea
                  name="full_details"
                  value={formData.full_details}
                  onChange={handleChange}
                  rows="5"
                />
              </div>

              <div className="cms-form-row">
                <div className="cms-form-group">
                  <label>Featured Image</label>
                  <input
                    type="text"
                    name="featured_image"
                    value={formData.featured_image}
                    onChange={handleChange}
                    placeholder="/images/course.jpg"
                  />
                </div>

                <div className="cms-form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 6 months"
                  />
                </div>
              </div>

              <div className="cms-form-row">
                <div className="cms-form-group">
                  <label>Level</label>
                  <input
                    type="text"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    placeholder="e.g., Beginner, Intermediate"
                  />
                </div>

                <div className="cms-form-group">
                  <label>Display Order</label>
                  <input
                    type="number"
                    name="display_order"
                    value={formData.display_order}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="cms-form-row">
                <div className="cms-form-group">
                  <label>Status</label>
                  <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div className="cms-form-group checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="show_on_home"
                      checked={formData.show_on_home}
                      onChange={handleChange}
                    />
                    Show on Home Page
                  </label>
                </div>
              </div>

              <div className="cms-form-actions">
                <button type="button" onClick={handleCloseModal} className="cms-btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="cms-btn-primary">
                  {editingCourse ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CMSCourses;
