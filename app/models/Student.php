// backend/app/models/Student.php
<?php
class Student {
    private $conn;
    private $table = 'students';

    public function __construct($db) {
        $this->conn = $db;
    }

    // Create a new student
    public function create($data) {
        $query = "INSERT INTO " . $this->table . " (fName, lName, mName, SchoolId, year, email, password) 
                  VALUES (:fName, :lName, :mName, :SchoolId, :year, :email, :password)";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':fName', $data['fName']);
        $stmt->bindParam(':lName', $data['lName']);
        $stmt->bindParam(':mName', $data['mName']);
        $stmt->bindParam(':SchoolId', $data['SchoolId']);
        $stmt->bindParam(':year', $data['year']);
        $stmt->bindParam(':email', $data['email']);
        $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);
        $stmt->bindParam(':password', $hashedPassword); // Pass the variable instead of the function call directly
        

        return $stmt->execute();
    }

    // Fetch all students
    public function getAll() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Fetch a student by ID
    public function getById($id) {
        $query = "SELECT * FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Delete student
    public function delete($id) {
        $query = "DELETE FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $id);
        return $stmt->execute();
    }
}
