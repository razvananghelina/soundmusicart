<?php
/**
 * Base CRUD Class
 * Provides common CRUD operations for all tables
 */

require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/Response.php';
require_once __DIR__ . '/JWT.php';

abstract class BaseCRUD {
    protected PDO $db;
    protected string $table;
    protected array $fillable = [];
    protected bool $requireAuth = true;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();

        if (!$this->db) {
            Response::error('Database connection failed', 500);
        }
    }

    /**
     * Check authentication
     */
    protected function checkAuth(): ?array {
        if (!$this->requireAuth) {
            return null;
        }

        $payload = JWT::verify();

        if (!$payload) {
            Response::unauthorized('Authentication required');
        }

        return $payload;
    }

    /**
     * List all records
     */
    public function list(array $filters = []): void {
        $this->checkAuth();

        try {
            $query = "SELECT * FROM {$this->table}";
            $conditions = [];
            $params = [];

            // Add filters
            if (isset($filters['status'])) {
                $conditions[] = "status = :status";
                $params[':status'] = $filters['status'];
            }

            if (!empty($conditions)) {
                $query .= " WHERE " . implode(' AND ', $conditions);
            }

            // Check if table has display_order column
            $checkColumn = $this->db->prepare("SHOW COLUMNS FROM {$this->table} LIKE 'display_order'");
            $checkColumn->execute();
            $hasDisplayOrder = $checkColumn->fetch();

            // Order by display_order if column exists, otherwise by id
            if ($hasDisplayOrder) {
                $query .= " ORDER BY display_order ASC, id DESC";
            } else {
                $query .= " ORDER BY id DESC";
            }

            $stmt = $this->db->prepare($query);
            $stmt->execute($params);

            $records = $stmt->fetchAll();

            Response::success($records);
        } catch (Exception $e) {
            Response::error('Failed to fetch records: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Get single record by ID
     */
    public function get(int $id): void {
        $this->checkAuth();

        try {
            $query = "SELECT * FROM {$this->table} WHERE id = :id LIMIT 1";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':id', $id);
            $stmt->execute();

            $record = $stmt->fetch();

            if (!$record) {
                Response::notFound('Record not found');
            }

            Response::success($record);
        } catch (Exception $e) {
            Response::error('Failed to fetch record: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Create new record
     */
    public function create(array $data): void {
        $this->checkAuth();

        try {
            // Filter data to only fillable fields
            $filteredData = array_intersect_key($data, array_flip($this->fillable));

            if (empty($filteredData)) {
                Response::validationError(['data' => 'No valid data provided']);
            }

            $columns = array_keys($filteredData);
            $placeholders = array_map(fn($col) => ":$col", $columns);

            $query = "INSERT INTO {$this->table} (" . implode(', ', $columns) . ")
                      VALUES (" . implode(', ', $placeholders) . ")";

            $stmt = $this->db->prepare($query);

            foreach ($filteredData as $key => $value) {
                $stmt->bindValue(":$key", $value);
            }

            $stmt->execute();

            $id = $this->db->lastInsertId();

            Response::success(['id' => $id], 'Record created successfully', 201);
        } catch (Exception $e) {
            Response::error('Failed to create record: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Update existing record
     */
    public function update(int $id, array $data): void {
        $this->checkAuth();

        try {
            // Filter data to only fillable fields
            $filteredData = array_intersect_key($data, array_flip($this->fillable));

            if (empty($filteredData)) {
                Response::validationError(['data' => 'No valid data provided']);
            }

            $setClause = [];
            foreach (array_keys($filteredData) as $column) {
                $setClause[] = "$column = :$column";
            }

            $query = "UPDATE {$this->table}
                      SET " . implode(', ', $setClause) . "
                      WHERE id = :id";

            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':id', $id);

            foreach ($filteredData as $key => $value) {
                $stmt->bindValue(":$key", $value);
            }

            $stmt->execute();

            if ($stmt->rowCount() === 0) {
                Response::notFound('Record not found or no changes made');
            }

            Response::success(null, 'Record updated successfully');
        } catch (Exception $e) {
            Response::error('Failed to update record: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Delete record
     */
    public function delete(int $id): void {
        $this->checkAuth();

        try {
            $query = "DELETE FROM {$this->table} WHERE id = :id";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':id', $id);
            $stmt->execute();

            if ($stmt->rowCount() === 0) {
                Response::notFound('Record not found');
            }

            Response::success(null, 'Record deleted successfully');
        } catch (Exception $e) {
            Response::error('Failed to delete record: ' . $e->getMessage(), 500);
        }
    }
}
