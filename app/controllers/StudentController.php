<?php
require_once __DIR__ . '/../../app/models/Student.php';
require_once __DIR__ . '/../../config/database.php';

class StudentController {
    private $studentModel;

    public function __construct() {
        $db = (new Database())->getConnection();
        $this->studentModel = new Student($db);
    }

    // Fetch all students
    public function index() {
        $students = $this->studentModel->getAll();
        return json_encode($students); // Return the data instead of echoing
    }
    

    // Render the create form view
    public function create() {
        include './app/views/students/create.php'; // Load the view for adding a student
    }

    // Create a new student (for both API and form submissions)
    public function store() {
        // Check if the request is a JSON request (API call) or form submission
        if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'application/json') !== false) {
            // If the content type is JSON, treat it as an API request
            $data = json_decode(file_get_contents("php://input"), true);
        } else {
            // Otherwise, handle it as a form submission
            $data = [
                'fName' => $_POST['fName'] ?? null,
                'lName' => $_POST['lName'] ?? null,
                'mName' => $_POST['mName'] ?? null,
                'SchoolId' => $_POST['SchoolId'] ?? null,
                'year' => $_POST['year'] ?? null,
                'email' => $_POST['email'] ?? null,
                'password' => $_POST['password'] ?? null,
            ];
        }

        // Validate and create student
        if ($this->studentModel->create($data)) {
            // For API request, send JSON response
            if (isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'application/json') !== false) {
                echo json_encode(['message' => 'Student created']);
            } else {
                // For form submission, redirect to the index or display success message
                echo "Student created successfully!";
            }
        } else {
            // Handle errors for both API and form submission
            if (isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'application/json') !== false) {
                echo json_encode(['message' => 'Error creating student']);
            } else {
                echo "Error creating student!";
            }
        }
    }

    // Get single student
    public function show($id) {
        $student = $this->studentModel->getById($id);
        echo json_encode($student);
    }

    // Delete a student
    public function delete($id) {
        if ($this->studentModel->delete($id)) {
            echo json_encode(['message' => 'Student deleted']);
        } else {
            echo json_encode(['message' => 'Error deleting student']);
        }
    }
}
