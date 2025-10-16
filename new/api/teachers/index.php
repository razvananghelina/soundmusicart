<?php
/**
 * Teachers API Endpoint
 */

require_once '../config/cors.php';
require_once '../utils/BaseCRUD.php';

class TeachersAPI extends BaseCRUD {
    protected string $table = 'teachers';
    protected array $fillable = [
        'slug', 'full_name', 'specialty', 'profile_image', 'bio',
        'credentials', 'experience', 'instruments_taught', 'display_order',
        'status', 'facebook_url', 'instagram_url', 'linkedin_url',
        'meta_title', 'meta_description'
    ];
}

$api = new TeachersAPI();
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

        case 'POST':
            $api->create($input);
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
