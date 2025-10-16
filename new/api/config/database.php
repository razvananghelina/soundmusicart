<?php
/**
 * Database Configuration and Connection
 * PHP 8.0+
 */

class Database {
    // TESTING/LOCALHOST CONFIGURATION
    private $host = "localhost";
    private $port = "3307";
    private $db_name = "sound";
    private $username = "root";
    private $password = "";

    // PRODUCTION/LIVE CONFIGURATION
    // Uncomment and update these for production
    /*
    private $host = "your-live-host.com";
    private $port = "3306";
    private $db_name = "your_live_database";
    private $username = "your_live_username";
    private $password = "your_live_password";
    */

    private $conn = null;

    /**
     * Get database connection
     */
    public function getConnection(): ?PDO {
        try {
            $dsn = "mysql:host=" . $this->host .
                   ";port=" . $this->port .
                   ";dbname=" . $this->db_name .
                   ";charset=utf8mb4";

            $this->conn = new PDO(
                $dsn,
                $this->username,
                $this->password
            );

            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $this->conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

            return $this->conn;
        } catch(PDOException $e) {
            error_log("Connection error: " . $e->getMessage());
            return null;
        }
    }
}
