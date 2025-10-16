<?php
/**
 * Stats API Endpoint
 */

require_once '../config/cors.php';
require_once '../utils/BaseCRUD.php';

class StatsAPI extends BaseCRUD {
    protected string $table = 'stats';
    protected array $fillable = [
        'icon', 'title', 'description', 'display_order', 'status'
    ];
}

$api = new StatsAPI();
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
