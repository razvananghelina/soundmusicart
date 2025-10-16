# CMS API Testing Scripts

These scripts help you test and troubleshoot the CMS API.

## 1. Test Database Connection

**URL:** `http://localhost/sound/api/test/test-connection.php`

This script will:
- Test database connection
- Check if the users table exists
- Check if admin user exists
- Verify password hash

**What to check:**
- If `users_table` shows "EXISTS" → Database is imported
- If `admin_exists` is `true` → Admin user exists
- If `password_verification` shows "VALID" → Password hash is correct
- If `password_verification` shows "INVALID" → Password hash is wrong

## 2. Create/Reset Admin User

**URL:** `http://localhost/sound/api/test/create-admin.php`

This script will:
- Create a new admin user if none exists
- Reset the admin password if user exists
- Generate a fresh password hash

**After running this:**
- Login with: `admin@soundmusicart.ro` / `admin123`

## Common Issues

### Issue 1: "Users table does not exist"
**Solution:** Import the database SQL file
```bash
mysql -u root -P 3307 -p sound < database/cms_database.sql
```

### Issue 2: "Invalid credentials"
**Solution:**
1. Run `create-admin.php` to reset the password
2. Try logging in again

### Issue 3: "Database connection failed"
**Solution:**
1. Check if MySQL is running on port 3307
2. Verify database name is "sound"
3. Check `api/config/database.php` settings

### Issue 4: "Admin user not found"
**Solution:** Run `create-admin.php` to create the admin user

## Testing Login

After fixing issues, test login with:
```javascript
fetch("http://localhost/sound/api/auth/login.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "admin@soundmusicart.ro",
    password: "admin123"
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

Expected success response:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "...",
    "user": {
      "id": 1,
      "email": "admin@soundmusicart.ro",
      "first_name": "Admin",
      "last_name": "User",
      "role": "admin"
    }
  }
}
```
