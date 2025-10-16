import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost, API_ENDPOINTS } from '../../config/api';
import './CMSLogin.css';

const CMSLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    const token = localStorage.getItem('cms_token');
    if (token) {
      navigate('/cms');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await apiPost(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });

      if (response.success) {
        localStorage.setItem('cms_token', response.data.token);
        localStorage.setItem('cms_user', JSON.stringify(response.data.user));
        navigate('/cms');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cms-login-page">
      <div className="cms-login-container">
        <div className="cms-login-card">
          <h1>Sound Music Art</h1>
          <h2>CMS Login</h2>

          {error && <div className="cms-login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@soundmusicart.ro"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-login">
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CMSLogin;
