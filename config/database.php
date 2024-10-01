<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

class Database {
    private $host = "localhost";
    private $db_name = "codebyters";
    private $username = "root";
    private $password = "";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connected to the database successfully.";  // Success message
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();  // Error message
        }
        return $this->conn;
    }
}

$database = new Database();
$database->getConnection();
