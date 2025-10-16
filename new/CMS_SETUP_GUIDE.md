# Sound Music Art - CMS Setup Guide

## Overview
A complete Content Management System has been created for the Sound Music Art website with:
- PHP 8 REST API Backend
- React Frontend CMS Interface
- Full CRUD operations for all content types

---

## 1. Database Setup

### Import the SQL File
```bash
# Import the database schema
mysql -u root -p < database/cms_database.sql

# Or through phpMyAdmin:
# 1. Create database 'sound_music_art'
# 2. Import 'database/cms_database.sql'
```

### Default Credentials
- **Email:** admin@soundmusicart.ro
- **Password:** admin123
- **Important:** Change this password after first login!

---

## 2. PHP API Setup

### Configuration
1. Update database credentials in `api/config/database.php`:
```php
private $host = "localhost";
private $db_name = "sound_music_art";
private $username = "root";  // Change this
private $password = "";      // Change this
```

2. Update JWT secret key in `api/utils/JWT.php`:
```php
private static string $secret_key = "your-secret-key-change-this-in-production";
```

### API Base URL
The API is configured to run at: `http://localhost/sound/api`

Make sure your PHP files are accessible at this path. You can:
- Use XAMPP/WAMP and place files in `htdocs/sound/`
- Use built-in PHP server (not recommended for production)
- Configure Apache/Nginx virtual host

### Testing the API
```bash
# Test the API is working
curl http://localhost/sound/api/auth/check.php
```

---

## 3. React Frontend Setup

### API Configuration
The API base URL is set in `src/config/api.js`:
```javascript
export const API_BASE_URL = 'http://localhost/sound/api';
```

Change this if your API is hosted elsewhere.

### CMS Routes
The CMS is accessible at:
- Login: `http://localhost:5173/cms/login`
- Dashboard: `http://localhost:5173/cms`

---

## 4. File Structure

```
project/
├── api/                          # PHP Backend
│   ├── config/
│   │   ├── database.php         # Database connection
│   │   └── cors.php             # CORS configuration
│   ├── utils/
│   │   ├── Response.php         # API response helper
│   │   ├── JWT.php              # JWT authentication
│   │   └── BaseCRUD.php         # Base CRUD operations
│   ├── auth/
│   │   ├── login.php            # Login endpoint
│   │   ├── check.php            # Auth check endpoint
│   │   └── logout.php           # Logout endpoint
│   ├── courses/
│   │   └── index.php            # Courses CRUD endpoints
│   ├── teachers/
│   │   └── index.php            # Teachers CRUD endpoints
│   ├── blog-posts/
│   │   └── index.php            # Blog posts CRUD endpoints
│   ├── hero-slides/
│   │   └── index.php            # Hero slides CRUD endpoints
│   ├── features/
│   │   └── index.php            # Features CRUD endpoints
│   ├── form-submissions/
│   │   └── index.php            # Form submissions endpoints
│   └── contact-info/
│       └── index.php            # Contact info endpoints
├── database/
│   └── cms_database.sql         # Database schema
├── src/
│   ├── config/
│   │   └── api.js               # API configuration
│   └── pages/
│       └── CMS/
│           ├── CMSLogin.jsx     # Login page
│           ├── CMSLayout.jsx    # CMS layout with sidebar
│           ├── CMSDashboard.jsx # Dashboard
│           ├── CMSCourses.jsx   # Courses management
│           ├── CMSTeachers.jsx  # Teachers management
│           ├── CMSBlogPosts.jsx # Blog posts management
│           ├── CMSHeroSlides.jsx # Hero slides management
│           ├── CMSSubmissions.jsx # Form submissions
│           └── CMSSettings.jsx  # Settings
```

---

## 5. Available API Endpoints

### Authentication
- `POST /api/auth/login.php` - Login
- `GET /api/auth/check.php` - Check auth status
- `POST /api/auth/logout.php` - Logout

### Courses
- `GET /api/courses/index.php` - List all courses
- `GET /api/courses/index.php?id={id}` - Get single course
- `POST /api/courses/index.php` - Create course
- `PUT /api/courses/index.php?id={id}` - Update course
- `DELETE /api/courses/index.php?id={id}` - Delete course

### Teachers
- `GET /api/teachers/index.php` - List all teachers
- `GET /api/teachers/index.php?id={id}` - Get single teacher
- `POST /api/teachers/index.php` - Create teacher
- `PUT /api/teachers/index.php?id={id}` - Update teacher
- `DELETE /api/teachers/index.php?id={id}` - Delete teacher

### Blog Posts
- `GET /api/blog-posts/index.php` - List all posts
- `GET /api/blog-posts/index.php?id={id}` - Get single post
- `POST /api/blog-posts/index.php` - Create post
- `PUT /api/blog-posts/index.php?id={id}` - Update post
- `DELETE /api/blog-posts/index.php?id={id}` - Delete post

### Hero Slides
- `GET /api/hero-slides/index.php` - List all slides
- `GET /api/hero-slides/index.php?id={id}` - Get single slide
- `POST /api/hero-slides/index.php` - Create slide
- `PUT /api/hero-slides/index.php?id={id}` - Update slide
- `DELETE /api/hero-slides/index.php?id={id}` - Delete slide

### Form Submissions
- `GET /api/form-submissions/index.php` - List all submissions
- `GET /api/form-submissions/index.php?id={id}` - Get single submission
- `PUT /api/form-submissions/index.php?id={id}` - Update submission
- `DELETE /api/form-submissions/index.php?id={id}` - Delete submission

### Contact Info
- `GET /api/contact-info/index.php` - Get contact info
- `PUT /api/contact-info/index.php?id={id}` - Update contact info

---

## 6. Database Tables

The database includes 23 tables:

### Core Content
- `hero_slides` - Homepage slider
- `features` - Feature cards
- `stats` - Statistics section
- `services` - Service/age groups
- `courses` - Music courses
- `teachers` - Teacher profiles
- `blog_posts`, `blog_categories`, `blog_tags` - Blog system
- `extra_services` - Additional services
- `cvt_content` - CVT section content

### System
- `users` - CMS users
- `media_library` - Media files
- `form_submissions` - Form data
- `navigation_menus`, `navigation_items` - Navigation
- `contact_info` - Contact details
- `organization_info` - About content
- `site_settings` - Global settings

### Future Use
- `testimonials` - Client reviews
- `events` - Events/classes
- `pricing_packages` - Pricing plans

---

## 7. CMS Features

### Dashboard
- Statistics overview
- Quick action buttons
- Real-time data from API

### Courses Management
- List all courses with table view
- Create/Edit/Delete courses
- Full form with all fields:
  - Title, Slug, Description
  - Full details, Featured image
  - Duration, Level, Status
  - Show on home page option
  - Display order

### Other Management Pages
- Teachers - Manage teacher profiles
- Blog Posts - Create and edit blog articles
- Hero Slides - Homepage slider management
- Form Submissions - View contact/registration forms
- Settings - Site-wide configuration

---

## 8. Security Notes

1. **Change Default Password:** The default admin password must be changed
2. **JWT Secret:** Update the JWT secret key in production
3. **Database Credentials:** Use strong database credentials
4. **CORS:** Configure CORS properly for production
5. **SSL:** Use HTTPS in production
6. **File Permissions:** Restrict API directory permissions

---

## 9. Next Steps

### Immediate
1. Import database schema
2. Update database credentials
3. Test API endpoints
4. Login to CMS and change password

### Development
1. Complete remaining management pages (Teachers, Blog, etc.)
2. Add image upload functionality
3. Add rich text editor for content
4. Implement search and filters
5. Add pagination for large datasets

### Production
1. Update API base URL
2. Configure SSL/HTTPS
3. Set up proper CORS rules
4. Implement rate limiting
5. Set up backups
6. Monitor error logs

---

## 10. Troubleshooting

### API Not Working
- Check PHP version (requires PHP 8.0+)
- Verify database connection in `database.php`
- Check Apache/Nginx configuration
- Enable CORS in `.htaccess`

### Authentication Issues
- Clear browser localStorage
- Check JWT secret key matches
- Verify token expiration time

### CORS Errors
- Check `cors.php` configuration
- Verify API URL in React config
- Check browser console for details

---

## Support

For issues or questions, refer to:
- Database schema: `database/cms_database.sql`
- API documentation: This file
- React components: `src/pages/CMS/`

---

**Created:** 2025-10-16
**Version:** 1.0
