<?php
/**
 * Form Submissions API Endpoint
 */

require_once '../config/cors.php';
require_once '../utils/BaseCRUD.php';

class FormSubmissionsAPI extends BaseCRUD {
    protected string $table = 'form_submissions';
    protected array $fillable = [
        'form_type', 'name', 'email', 'phone', 'subject', 'message',
        'age', 'instrument_interest', 'experience_level', 'status',
        'ip_address', 'user_agent', 'notes'
    ];
}

$api = new FormSubmissionsAPI();
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true) ?? [];

try {
    switch ($method) {
        case 'GET':
            if (isset($_GET['id'])) {
                $api->get((int)$_GET['id']);
            } else {
                $filters = [];
                if (isset($_GET['status'])) {
                    $filters['status'] = $_GET['status'];
                }
                $api->list($filters);
            }
            break;

        case 'PUT':
            if (!isset($_GET['id'])) {
                Response::error('ID is required', 400);
            }
            $api->update((int)$_GET['id'], $input);
            break;

        case 'DELETE':
            if (!isset($_GET['id'])) {
                Response::error('ID is required', 400);
            }
            $api->delete((int)$_GET['id']);
            break;

        default:
            Response::error('Method not allowed', 405);
    }
} catch (Exception $e) {
    Response::error('Server error: ' . $e->getMessage(), 500);
}
