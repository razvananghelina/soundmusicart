<?php
/**
 * Logout Endpoint
 * Note: Since we're using JWT, logout is handled on the client side
 * This endpoint is mainly for logging purposes
 */

require_once '../config/cors.php';
require_once '../utils/Response.php';
require_once '../utils/JWT.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

try {
    // Verify token
    $payload = JWT::verify();

    if ($payload) {
        // Log the logout event if needed
        // For JWT, actual logout happens on client side by removing the token
        Response::success(null, 'Logged out successfully');
    } else {
        Response::success(null, 'Already logged out');
    }

} catch (Exception $e) {
    Response::error('Server error: ' . $e->getMessage(), 500);
}
