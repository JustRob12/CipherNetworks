<?php
// backend/app/controllers/StudentController.php

require_once './app/models/Student.php';
require_once './config/database.php';

class StudentController {
    private $db;
    private $studentModel;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
        $this->studentModel = new Student($this->db);
    }

    public function index() {
        $result = $this->studentModel->getAllStudents();
        include_once './app/views/students/list.php';
    }

    public function create() {
        include_once './app/views/students/create.php';
    }

    public function store() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $this->studentModel->fName = $_POST['fName'];
            $this->studentModel->lName = $_POST['lName'];
            $this->studentModel->mName = $_POST['mName'];
            $this->studentModel->schoolId = $_POST['schoolId'];
            $this->studentModel->year = $_POST['year'];
            $this->studentModel->email = $_POST['email'];
            $this->studentModel->password = password_hash($_POST['password'], PASSWORD_DEFAULT);

            if ($this->studentModel->createStudent()) {
                header('Location: /students');
            } else {
                echo "Error creating student.";
            }
        }
    }
}
