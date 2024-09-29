<?php
// backend/app/models/Student.php

class Student {
    private $conn;
    private $table = "students";

    public $fName;
    public $lName;
    public $mName;
    public $schoolId;
    public $year;
    public $email;
    public $password;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getAllStudents() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function createStudent() {
        $query = "INSERT INTO " . $this->table . " SET fName=:fName, lName=:lName, mName=:mName, schoolId=:schoolId, year=:year, email=:email, password=:password";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":fName", $this->fName);
        $stmt->bindParam(":lName", $this->lName);
        $stmt->bindParam(":mName", $this->mName);
        $stmt->bindParam(":schoolId", $this->schoolId);
        $stmt->bindParam(":year", $this->year);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $this->password);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
