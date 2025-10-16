<?php
/**
 * Contact Info API Endpoint
 */

require_once '../config/cors.php';
require_once '../utils/BaseCRUD.php';

class ContactInfoAPI extends BaseCRUD {
    protected string $table = 'contact_info';
    protected array $fillable = [
        'business_name', 'phone', 'email', 'address', 'city',
        'postal_code', 'country', 'business_hours_weekday',
        'business_hours_saturday', 'business_hours_sunday',
        'google_maps_embed', 'facebook_url', 'twitter_url',
        'instagram_url', 'youtube_url', 'linkedin_url'
    ];

    // Override list to return single record
    public function list(array $filters = []): void {
        $this->checkAuth();

        try {
            $query = "SELECT * FROM {$this->table} LIMIT 1";
            $stmt = $this->db->prepare($query);
            $stmt->execute();

            $record = $stmt->fetch();

            Response::success($record);
        } catch (Exception $e) {
            Response::error('Failed to fetch contact info: ' . $e->getMessage(), 500);
        }
    }
}

$api = new ContactInfoAPI();
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true) ?? [];

try {
    switch ($method) {
        case 'GET':
            $api->list([]);
            break;

        case 'PUT':
            if (!isset($_GET['id'])) {
                Response::error('ID is required', 400);
            }
            $api->update((int)$_GET['id'], $input);
            break;

        default:
            Response::error('Method not allowed', 405);
    }
} catch (Exception $e) {
    Response::error('Server error: ' . $e->getMessage(), 500);
}
