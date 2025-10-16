<?php
/**
 * Test Database Connection and Check Users Table
 */

require_once '../config/database.php';

header('Content-Type: application/json');

$response = [
    'success' => false,
    'message' => '',
    'data' => []
];

try {
    // Test database connection
    $database = new Database();
    $db = $database->getConnection();

    if (!$db) {
        $response['message'] = 'Database connection failed';
        echo json_encode($response);
        exit;
    }

    $response['data']['connection'] = 'SUCCESS';

    // Check if users table exists
    $query = "SHOW TABLES LIKE 'users'";
    $stmt = $db->query($query);
    $tableExists = $stmt->fetch();

    if (!$tableExists) {
        $response['message'] = 'Users table does not exist. Please import the database SQL file.';
        echo json_encode($response);
        exit;
    }

    $response['data']['users_table'] = 'EXISTS';

    // Count users in database
    $query = "SELECT COUNT(*) as count FROM users";
    $stmt = $db->query($query);
    $result = $stmt->fetch();
    $response['data']['user_count'] = $result['count'];

    // Get admin user if exists
    $query = "SELECT id, email, first_name, last_name, role, status FROM users WHERE email = 'admin@soundmusicart.ro'";
    $stmt = $db->query($query);
    $adminUser = $stmt->fetch();

    if ($adminUser) {
        $response['data']['admin_user'] = $adminUser;
        $response['data']['admin_exists'] = true;
    } else {
        $response['data']['admin_exists'] = false;
        $response['message'] = 'Admin user not found. You need to create one.';
        echo json_encode($response);
        exit;
    }

    // Get the password hash for verification
    $query = "SELECT password FROM users WHERE email = 'admin@soundmusicart.ro'";
    $stmt = $db->query($query);
    $result = $stmt->fetch();

    if ($result) {
        $response['data']['password_hash_length'] = strlen($result['password']);
        $response['data']['password_hash_prefix'] = substr($result['password'], 0, 7);

        // Test password verification
        $testPassword = 'admin123';
        $isValid = password_verify($testPassword, $result['password']);
        $response['data']['password_verification'] = $isValid ? 'VALID' : 'INVALID';
    }

    $response['success'] = true;
    $response['message'] = 'Database connection and checks completed';

} catch (Exception $e) {
    $response['message'] = 'Error: ' . $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
