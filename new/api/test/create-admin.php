<?php
/**
 * Create or Reset Admin User
 * This script will create a new admin user or reset the password if one exists
 */

require_once '../config/database.php';

header('Content-Type: application/json');

$response = [
    'success' => false,
    'message' => '',
    'data' => []
];

try {
    $database = new Database();
    $db = $database->getConnection();

    if (!$db) {
        $response['message'] = 'Database connection failed';
        echo json_encode($response);
        exit;
    }

    // Admin user details
    $email = 'admin@soundmusicart.ro';
    $password = 'admin123';
    $firstName = 'Admin';
    $lastName = 'User';
    $role = 'admin';
    $status = 'active';

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $response['data']['new_hash_generated'] = true;
    $response['data']['hash_length'] = strlen($hashedPassword);

    // Check if admin exists
    $query = "SELECT id FROM users WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $existingUser = $stmt->fetch();

    if ($existingUser) {
        // Update existing admin user
        $query = "UPDATE users SET password = :password WHERE email = :email";
        $stmt = $db->prepare($query);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        $response['message'] = 'Admin user password reset successfully';
        $response['data']['action'] = 'UPDATED';
        $response['data']['user_id'] = $existingUser['id'];
    } else {
        // Create new admin user
        $query = "INSERT INTO users (email, password, first_name, last_name, role, status)
                  VALUES (:email, :password, :first_name, :last_name, :role, :status)";
        $stmt = $db->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':first_name', $firstName);
        $stmt->bindParam(':last_name', $lastName);
        $stmt->bindParam(':role', $role);
        $stmt->bindParam(':status', $status);
        $stmt->execute();

        $response['message'] = 'Admin user created successfully';
        $response['data']['action'] = 'CREATED';
        $response['data']['user_id'] = $db->lastInsertId();
    }

    // Verify the password works
    $query = "SELECT password FROM users WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $result = $stmt->fetch();

    if ($result && password_verify($password, $result['password'])) {
        $response['data']['password_verified'] = true;
    } else {
        $response['data']['password_verified'] = false;
    }

    $response['success'] = true;
    $response['data']['credentials'] = [
        'email' => $email,
        'password' => $password
    ];

} catch (Exception $e) {
    $response['message'] = 'Error: ' . $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);
