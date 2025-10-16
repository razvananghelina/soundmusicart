<?php
/**
 * Login Endpoint
 * Authenticates user and returns JWT token
 */

require_once '../config/database.php';
require_once '../config/cors.php';
require_once '../utils/Response.php';
require_once '../utils/JWT.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

try {
    // Get posted data
    $data = json_decode(file_get_contents("php://input"));

    // Validate input
    if (empty($data->email) || empty($data->password)) {
        Response::validationError(['email' => 'Email and password are required']);
    }

    // Connect to database
    $database = new Database();
    $db = $database->getConnection();

    if (!$db) {
        Response::error('Database connection failed', 500);
    }

    // Query user
    $query = "SELECT id, email, password, first_name, last_name, role, status
              FROM users
              WHERE email = :email
              LIMIT 1";

    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $data->email);
    $stmt->execute();

    $user = $stmt->fetch();

    if (!$user) {
        Response::error('Invalid credentials', 401);
    }

    // Check if user is active
    if ($user['status'] !== 'active') {
        Response::error('Your account is inactive', 403);
    }

    // Verify password
    if (!password_verify($data->password, $user['password'])) {
        Response::error('Invalid credentials', 401);
    }

    // Update last login
    $updateQuery = "UPDATE users SET last_login = NOW() WHERE id = :id";
    $updateStmt = $db->prepare($updateQuery);
    $updateStmt->bindParam(':id', $user['id']);
    $updateStmt->execute();

    // Generate JWT token
    $token = JWT::encode([
        'user_id' => $user['id'],
        'email' => $user['email'],
        'role' => $user['role']
    ]);

    // Return success response
    Response::success([
        'token' => $token,
        'user' => [
            'id' => $user['id'],
            'email' => $user['email'],
            'first_name' => $user['first_name'],
            'last_name' => $user['last_name'],
            'role' => $user['role']
        ]
    ], 'Login successful');

} catch (Exception $e) {
    Response::error('Server error: ' . $e->getMessage(), 500);
}
