// API Configuration
export const API_BASE_URL = 'http://localhost/sound/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login.php`,
    LOGOUT: `${API_BASE_URL}/auth/logout.php`,
    CHECK: `${API_BASE_URL}/auth/check.php`,
  },

  // Hero Slides
  HERO_SLIDES: {
    LIST: `${API_BASE_URL}/hero-slides/index.php`,
    GET: `${API_BASE_URL}/hero-slides/index.php`,
    CREATE: `${API_BASE_URL}/hero-slides/index.php`,
    UPDATE: `${API_BASE_URL}/hero-slides/index.php`,
    DELETE: `${API_BASE_URL}/hero-slides/index.php`,
  },

  // Features
  FEATURES: {
    LIST: `${API_BASE_URL}/features/index.php`,
    GET: `${API_BASE_URL}/features/index.php`,
    CREATE: `${API_BASE_URL}/features/index.php`,
    UPDATE: `${API_BASE_URL}/features/index.php`,
    DELETE: `${API_BASE_URL}/features/index.php`,
  },

  // Stats
  STATS: {
    LIST: `${API_BASE_URL}/stats/index.php`,
    GET: `${API_BASE_URL}/stats/index.php`,
    CREATE: `${API_BASE_URL}/stats/index.php`,
    UPDATE: `${API_BASE_URL}/stats/index.php`,
    DELETE: `${API_BASE_URL}/stats/index.php`,
  },

  // Services
  SERVICES: {
    LIST: `${API_BASE_URL}/services/index.php`,
    GET: `${API_BASE_URL}/services/index.php`,
    CREATE: `${API_BASE_URL}/services/index.php`,
    UPDATE: `${API_BASE_URL}/services/index.php`,
    DELETE: `${API_BASE_URL}/services/index.php`,
  },

  // Courses
  COURSES: {
    LIST: `${API_BASE_URL}/courses/index.php`,
    GET: `${API_BASE_URL}/courses/index.php`,
    CREATE: `${API_BASE_URL}/courses/index.php`,
    UPDATE: `${API_BASE_URL}/courses/index.php`,
    DELETE: `${API_BASE_URL}/courses/index.php`,
  },

  // Teachers
  TEACHERS: {
    LIST: `${API_BASE_URL}/teachers/index.php`,
    GET: `${API_BASE_URL}/teachers/index.php`,
    CREATE: `${API_BASE_URL}/teachers/index.php`,
    UPDATE: `${API_BASE_URL}/teachers/index.php`,
    DELETE: `${API_BASE_URL}/teachers/index.php`,
  },

  // Blog Categories
  BLOG_CATEGORIES: {
    LIST: `${API_BASE_URL}/blog-categories/index.php`,
    GET: `${API_BASE_URL}/blog-categories/index.php`,
    CREATE: `${API_BASE_URL}/blog-categories/index.php`,
    UPDATE: `${API_BASE_URL}/blog-categories/index.php`,
    DELETE: `${API_BASE_URL}/blog-categories/index.php`,
  },

  // Blog Tags
  BLOG_TAGS: {
    LIST: `${API_BASE_URL}/blog-tags/index.php`,
    GET: `${API_BASE_URL}/blog-tags/index.php`,
    CREATE: `${API_BASE_URL}/blog-tags/index.php`,
    UPDATE: `${API_BASE_URL}/blog-tags/index.php`,
    DELETE: `${API_BASE_URL}/blog-tags/index.php`,
  },

  // Blog Posts
  BLOG_POSTS: {
    LIST: `${API_BASE_URL}/blog-posts/index.php`,
    GET: `${API_BASE_URL}/blog-posts/index.php`,
    CREATE: `${API_BASE_URL}/blog-posts/index.php`,
    UPDATE: `${API_BASE_URL}/blog-posts/index.php`,
    DELETE: `${API_BASE_URL}/blog-posts/index.php`,
  },

  // Extra Services
  EXTRA_SERVICES: {
    LIST: `${API_BASE_URL}/extra-services/index.php`,
    GET: `${API_BASE_URL}/extra-services/index.php`,
    CREATE: `${API_BASE_URL}/extra-services/index.php`,
    UPDATE: `${API_BASE_URL}/extra-services/index.php`,
    DELETE: `${API_BASE_URL}/extra-services/index.php`,
  },

  // CVT Content
  CVT_CONTENT: {
    GET: `${API_BASE_URL}/cvt-content/index.php`,
    UPDATE: `${API_BASE_URL}/cvt-content/index.php`,
  },

  // Contact Info
  CONTACT_INFO: {
    GET: `${API_BASE_URL}/contact-info/index.php`,
    UPDATE: `${API_BASE_URL}/contact-info/index.php`,
  },

  // Organization Info
  ORGANIZATION_INFO: {
    GET: `${API_BASE_URL}/organization-info/index.php`,
    UPDATE: `${API_BASE_URL}/organization-info/index.php`,
  },

  // Form Submissions
  FORM_SUBMISSIONS: {
    LIST: `${API_BASE_URL}/form-submissions/index.php`,
    GET: `${API_BASE_URL}/form-submissions/index.php`,
    UPDATE: `${API_BASE_URL}/form-submissions/index.php`,
    DELETE: `${API_BASE_URL}/form-submissions/index.php`,
  },

  // Media Library
  MEDIA: {
    LIST: `${API_BASE_URL}/media/index.php`,
    GET: `${API_BASE_URL}/media/index.php`,
    UPLOAD: `${API_BASE_URL}/media/index.php`,
    DELETE: `${API_BASE_URL}/media/index.php`,
  },

  // Site Settings
  SETTINGS: {
    LIST: `${API_BASE_URL}/settings/index.php`,
    GET: `${API_BASE_URL}/settings/index.php`,
    UPDATE: `${API_BASE_URL}/settings/index.php`,
  },
};

// API Helper Functions
export const apiRequest = async (url, options = {}) => {
  const token = localStorage.getItem('cms_token');

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    },
  };

  const response = await fetch(url, { ...defaultOptions, ...options });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export const apiGet = (url) => apiRequest(url, { method: 'GET' });

export const apiPost = (url, data) => apiRequest(url, {
  method: 'POST',
  body: JSON.stringify(data),
});

export const apiPut = (url, data) => apiRequest(url, {
  method: 'PUT',
  body: JSON.stringify(data),
});

export const apiDelete = (url) => apiRequest(url, { method: 'DELETE' });

export const apiUpload = async (url, formData) => {
  const token = localStorage.getItem('cms_token');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...(token && { 'Authorization': `Bearer ${token}` }),
    },
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Upload failed');
  }

  return data;
};
