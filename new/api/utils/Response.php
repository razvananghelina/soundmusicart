<?php
/**
 * Response Helper Class
 * Standardizes API responses
 */

class Response {
    /**
     * Send success response
     */
    public static function success(mixed $data = null, string $message = 'Success', int $statusCode = 200): void {
        http_response_code($statusCode);
        echo json_encode([
            'success' => true,
            'message' => $message,
            'data' => $data
        ]);
        exit;
    }

    /**
     * Send error response
     */
    public static function error(string $message = 'Error', int $statusCode = 400, mixed $errors = null): void {
        http_response_code($statusCode);
        echo json_encode([
            'success' => false,
            'message' => $message,
            'errors' => $errors
        ]);
        exit;
    }

    /**
     * Send unauthorized response
     */
    public static function unauthorized(string $message = 'Unauthorized'): void {
        self::error($message, 401);
    }

    /**
     * Send not found response
     */
    public static function notFound(string $message = 'Resource not found'): void {
        self::error($message, 404);
    }

    /**
     * Send forbidden response
     */
    public static function forbidden(string $message = 'Forbidden'): void {
        self::error($message, 403);
    }

    /**
     * Send validation error response
     */
    public static function validationError(array $errors, string $message = 'Validation failed'): void {
        self::error($message, 422, $errors);
    }
}
