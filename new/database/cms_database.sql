-- ============================================
-- Sound Music Art - CMS Database Schema
-- ============================================
-- Created: 2025-10-16
-- Description: Complete database schema for the Sound Music Art CMS
-- ============================================

-- Set charset and collation for Romanian language support
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ============================================
-- 1. USERS & AUTHENTICATION
-- ============================================

CREATE TABLE `users` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `role` ENUM('admin', 'editor', 'author') DEFAULT 'author',
  `status` ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  `last_login` DATETIME NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_email` (`email`),
  INDEX `idx_role` (`role`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 2. HERO SLIDER SECTION
-- ============================================

CREATE TABLE `hero_slides` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `subtitle` VARCHAR(255) NULL,
  `button_text` VARCHAR(100) NULL,
  `button_link` VARCHAR(255) NULL,
  `background_image` VARCHAR(255) NOT NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 3. FEATURES SECTION
-- ============================================

CREATE TABLE `features` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `icon` VARCHAR(255) NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 4. STATS/WHY CHOOSE US SECTION
-- ============================================

CREATE TABLE `stats` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `icon` VARCHAR(255) NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 5. SERVICES/AGE GROUPS SECTION
-- ============================================

CREATE TABLE `services` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `age_range` VARCHAR(100) NULL,
  `description` TEXT NOT NULL,
  `icon_color` VARCHAR(50) NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 6. COURSES/INSTRUMENTS
-- ============================================

CREATE TABLE `courses` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `full_details` TEXT NULL,
  `featured_image` VARCHAR(255) NULL,
  `duration` VARCHAR(100) NULL,
  `level` VARCHAR(100) NULL,
  `show_on_home` BOOLEAN DEFAULT FALSE,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive', 'draft') DEFAULT 'active',
  `meta_title` VARCHAR(255) NULL,
  `meta_description` TEXT NULL,
  `meta_keywords` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_slug` (`slug`),
  INDEX `idx_status_order` (`status`, `display_order`),
  INDEX `idx_show_on_home` (`show_on_home`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 7. TEACHERS/PROFESSORS
-- ============================================

CREATE TABLE `teachers` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `full_name` VARCHAR(255) NOT NULL,
  `specialty` VARCHAR(255) NOT NULL,
  `profile_image` VARCHAR(255) NULL,
  `bio` TEXT NULL,
  `credentials` TEXT NULL,
  `experience` TEXT NULL,
  `instruments_taught` VARCHAR(255) NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `facebook_url` VARCHAR(255) NULL,
  `instagram_url` VARCHAR(255) NULL,
  `linkedin_url` VARCHAR(255) NULL,
  `meta_title` VARCHAR(255) NULL,
  `meta_description` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_slug` (`slug`),
  INDEX `idx_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 8. BLOG CATEGORIES
-- ============================================

CREATE TABLE `blog_categories` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_slug` (`slug`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 9. BLOG TAGS
-- ============================================

CREATE TABLE `blog_tags` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 10. BLOG POSTS
-- ============================================

CREATE TABLE `blog_posts` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `excerpt` TEXT NULL,
  `content` LONGTEXT NOT NULL,
  `featured_image` VARCHAR(255) NULL,
  `author_id` INT UNSIGNED NOT NULL,
  `category_id` INT UNSIGNED NULL,
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  `published_at` DATETIME NULL,
  `meta_title` VARCHAR(255) NULL,
  `meta_description` TEXT NULL,
  `meta_keywords` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_slug` (`slug`),
  INDEX `idx_status` (`status`),
  INDEX `idx_published_at` (`published_at`),
  INDEX `idx_author` (`author_id`),
  INDEX `idx_category` (`category_id`),
  FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`category_id`) REFERENCES `blog_categories`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 11. BLOG POST TAGS (Many-to-Many)
-- ============================================

CREATE TABLE `blog_post_tags` (
  `post_id` INT UNSIGNED NOT NULL,
  `tag_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`post_id`, `tag_id`),
  FOREIGN KEY (`post_id`) REFERENCES `blog_posts`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`tag_id`) REFERENCES `blog_tags`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 12. EXTRA SERVICES
-- ============================================

CREATE TABLE `extra_services` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `icon` VARCHAR(255) NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status_order` (`status`, `display_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 13. CVT CONTENT SECTION
-- ============================================

CREATE TABLE `cvt_content` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `description` TEXT NOT NULL,
  `video_file` VARCHAR(255) NULL,
  `video_thumbnail` VARCHAR(255) NULL,
  `about_cvt` TEXT NULL,
  `personal_development_info` TEXT NULL,
  `recording_studio_info` TEXT NULL,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 14. CONTACT INFORMATION
-- ============================================

CREATE TABLE `contact_info` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `business_name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `postal_code` VARCHAR(20) NULL,
  `country` VARCHAR(100) DEFAULT 'România',
  `business_hours_weekday` VARCHAR(100) NULL,
  `business_hours_saturday` VARCHAR(100) NULL,
  `business_hours_sunday` VARCHAR(100) NULL,
  `google_maps_embed` TEXT NULL,
  `facebook_url` VARCHAR(255) NULL,
  `twitter_url` VARCHAR(255) NULL,
  `instagram_url` VARCHAR(255) NULL,
  `youtube_url` VARCHAR(255) NULL,
  `linkedin_url` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 15. ORGANIZATION INFORMATION
-- ============================================

CREATE TABLE `organization_info` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `founded_year` INT NULL,
  `mission_statement` TEXT NULL,
  `about_description` TEXT NULL,
  `partnership_info` TEXT NULL,
  `ceo_name` VARCHAR(255) NULL,
  `history` TEXT NULL,
  `about_image` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 16. MEDIA LIBRARY
-- ============================================

CREATE TABLE `media_library` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `filename` VARCHAR(255) NOT NULL,
  `original_filename` VARCHAR(255) NOT NULL,
  `file_path` VARCHAR(255) NOT NULL,
  `file_type` VARCHAR(100) NOT NULL,
  `mime_type` VARCHAR(100) NOT NULL,
  `file_size` INT UNSIGNED NOT NULL,
  `category` ENUM('courses', 'teachers', 'hero', 'icons', 'backgrounds', 'logos', 'blog', 'videos', 'other') DEFAULT 'other',
  `alt_text` VARCHAR(255) NULL,
  `caption` TEXT NULL,
  `uploaded_by` INT UNSIGNED NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_category` (`category`),
  INDEX `idx_file_type` (`file_type`),
  INDEX `idx_uploaded_by` (`uploaded_by`),
  FOREIGN KEY (`uploaded_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 17. FORM SUBMISSIONS
-- ============================================

CREATE TABLE `form_submissions` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `form_type` ENUM('contact', 'registration') NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NULL,
  `subject` VARCHAR(255) NULL,
  `message` TEXT NULL,
  `age` INT NULL,
  `instrument_interest` VARCHAR(255) NULL,
  `experience_level` VARCHAR(100) NULL,
  `status` ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
  `ip_address` VARCHAR(45) NULL,
  `user_agent` VARCHAR(255) NULL,
  `notes` TEXT NULL,
  `submitted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_form_type` (`form_type`),
  INDEX `idx_status` (`status`),
  INDEX `idx_submitted_at` (`submitted_at`),
  INDEX `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 18. NAVIGATION MENUS
-- ============================================

CREATE TABLE `navigation_menus` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `menu_name` VARCHAR(100) NOT NULL UNIQUE,
  `location` VARCHAR(100) NOT NULL,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_location` (`location`),
  INDEX `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 19. NAVIGATION ITEMS
-- ============================================

CREATE TABLE `navigation_items` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `menu_id` INT UNSIGNED NOT NULL,
  `parent_id` INT UNSIGNED NULL,
  `label` VARCHAR(255) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `target` ENUM('_self', '_blank') DEFAULT '_self',
  `css_class` VARCHAR(100) NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_menu` (`menu_id`),
  INDEX `idx_parent` (`parent_id`),
  INDEX `idx_status_order` (`status`, `display_order`),
  FOREIGN KEY (`menu_id`) REFERENCES `navigation_menus`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`parent_id`) REFERENCES `navigation_items`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 20. SITE SETTINGS
-- ============================================

CREATE TABLE `site_settings` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `setting_key` VARCHAR(255) NOT NULL UNIQUE,
  `setting_value` TEXT NULL,
  `setting_type` ENUM('text', 'number', 'boolean', 'json', 'html') DEFAULT 'text',
  `description` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_key` (`setting_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 21. TESTIMONIALS (OPTIONAL - FOR FUTURE USE)
-- ============================================

CREATE TABLE `testimonials` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `client_name` VARCHAR(255) NOT NULL,
  `client_photo` VARCHAR(255) NULL,
  `quote` TEXT NOT NULL,
  `rating` TINYINT UNSIGNED DEFAULT 5,
  `course_id` INT UNSIGNED NULL,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive', 'pending') DEFAULT 'pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status_order` (`status`, `display_order`),
  INDEX `idx_rating` (`rating`),
  FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 22. EVENTS/CLASSES SCHEDULE (OPTIONAL - FOR FUTURE USE)
-- ============================================

CREATE TABLE `events` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `event_date` DATE NOT NULL,
  `event_time` TIME NOT NULL,
  `location` VARCHAR(255) NULL,
  `capacity` INT UNSIGNED NULL,
  `enrolled_count` INT UNSIGNED DEFAULT 0,
  `teacher_id` INT UNSIGNED NULL,
  `course_id` INT UNSIGNED NULL,
  `status` ENUM('open', 'closed', 'cancelled', 'completed') DEFAULT 'open',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_event_date` (`event_date`),
  INDEX `idx_status` (`status`),
  INDEX `idx_teacher` (`teacher_id`),
  INDEX `idx_course` (`course_id`),
  FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 23. PRICING/PACKAGES (OPTIONAL - FOR FUTURE USE)
-- ============================================

CREATE TABLE `pricing_packages` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `package_name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `currency` VARCHAR(10) DEFAULT 'RON',
  `duration` VARCHAR(100) NULL,
  `lesson_frequency` VARCHAR(100) NULL,
  `features` TEXT NULL,
  `is_featured` BOOLEAN DEFAULT FALSE,
  `display_order` INT DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_status_order` (`status`, `display_order`),
  INDEX `idx_featured` (`is_featured`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- INSERT DEFAULT DATA
-- ============================================

-- Insert default admin user (password: admin123 - CHANGE THIS!)
INSERT INTO `users` (`email`, `password`, `first_name`, `last_name`, `role`, `status`) VALUES
('admin@soundmusicart.ro', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 'User', 'admin', 'active');

-- Insert default contact information
INSERT INTO `contact_info` (`business_name`, `phone`, `email`, `address`, `city`, `country`, `business_hours_weekday`, `business_hours_saturday`) VALUES
('Sound Music Art', '+40 123 456 789', 'info@soundmusicart.ro', 'Bulevardul Frații Golești 74', 'Pitești', 'România', 'Luni-Vineri: 09:00-18:00', 'Sâmbătă: 10:00-14:00');

-- Insert default organization info
INSERT INTO `organization_info` (`founded_year`, `about_description`) VALUES
(2015, 'Sound Music Art a fost fondată în 2015 și oferă educație muzicală de calitate pentru toate vârstele.');

-- Insert default navigation menu
INSERT INTO `navigation_menus` (`menu_name`, `location`, `status`) VALUES
('Main Menu', 'header', 'active'),
('Footer Menu', 'footer', 'active');

-- Insert main navigation items
INSERT INTO `navigation_items` (`menu_id`, `label`, `url`, `display_order`, `status`) VALUES
(1, 'Acasa', '/', 0, 'active'),
(1, 'Despre noi', '/despre-noi', 1, 'active'),
(1, 'Profesorii nostri', '/profesori', 2, 'active'),
(1, 'Cursuri', '/cursuri', 3, 'active'),
(1, 'Blog', '/blog', 4, 'active'),
(1, 'Contact', '/contact', 5, 'active');

-- Insert default site settings
INSERT INTO `site_settings` (`setting_key`, `setting_value`, `setting_type`, `description`) VALUES
('site_name', 'Sound Music Art', 'text', 'Website name'),
('site_tagline', 'Școala ta de muzică', 'text', 'Website tagline'),
('site_logo', '/images/logo.png', 'text', 'Path to logo'),
('enable_blog', '1', 'boolean', 'Enable blog feature'),
('posts_per_page', '10', 'number', 'Number of posts per page'),
('primary_color', '#007bff', 'text', 'Primary brand color'),
('secondary_color', '#6c757d', 'text', 'Secondary brand color');

-- Insert default blog category
INSERT INTO `blog_categories` (`slug`, `name`, `description`, `status`) VALUES
('muzica', 'Muzică', 'Articole despre muzică și educație muzicală', 'active'),
('evenimente', 'Evenimente', 'Evenimente și activități', 'active'),
('sfaturi', 'Sfaturi', 'Sfaturi și ghiduri muzicale', 'active');

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================
-- END OF DATABASE SCHEMA
-- ============================================

-- NOTES:
-- 1. Default admin password is 'admin123' (hashed) - MUST BE CHANGED after first login
-- 2. All tables use utf8mb4 for full Romanian language support including special characters
-- 3. Timestamps are automatically managed with created_at and updated_at fields
-- 4. Foreign keys maintain referential integrity
-- 5. Indexes are added for frequently queried columns to improve performance
-- 6. Optional tables (testimonials, events, pricing) are included for future expansion
-- 7. Media library supports categorization for easy organization
-- 8. Form submissions track both contact and registration forms
-- 9. Navigation system supports nested menus for complex structures
-- 10. Site settings table allows flexible configuration without code changes
