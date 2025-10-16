<?php
/**
 * Check Authentication Endpoint
 * Verifies if the user is authenticated
 */

require_once '../config/database.php';
require_once '../config/cors.php';
require_once '../utils/Response.php';
require_once '../utils/JWT.php';

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    Response::error('Method not allowed', 405);
}

try {
    // Verify token
    $payload = JWT::verify();

    if (!$payload) {
        Response::unauthorized('Invalid or expired token');
    }

    // Connect to database
    $database = new Database();
    $db = $database->getConnection();

    if (!$db) {
        Response::error('Database connection failed', 500);
    }

    // Get user data
    $query = "SELECT id, email, first_name, last_name, role, status
              FROM users
              WHERE id = :id
              LIMIT 1";

    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $payload['user_id']);
    $stmt->execute();

    $user = $stmt->fetch();

    if (!$user || $user['status'] !== 'active') {
        Response::unauthorized('User not found or inactive');
    }

    // Return user data
    Response::success([
        'user' => [
            'id' => $user['id'],
            'email' => $user['email'],
            'first_name' => $user['first_name'],
            'last_name' => $user['last_name'],
            'role' => $user['role']
        ]
    ], 'Authenticated');

} catch (Exception $e) {
    Response::error('Server error: ' . $e->getMessage(), 500);
}
