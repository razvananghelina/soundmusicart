<?php
/**
 * Features API Endpoint
 */

require_once '../config/cors.php';
require_once '../utils/BaseCRUD.php';

class FeaturesAPI extends BaseCRUD {
    protected string $table = 'features';
    protected array $fillable = [
        'title', 'description', 'icon', 'display_order', 'status'
    ];
}

$api = new FeaturesAPI();
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
