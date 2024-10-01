<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "localhost"; // Update this if you have a different setup
$username = "root"; // Default XAMPP user
$password = ""; // Default XAMPP password is empty
$dbname = "your_database_name"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connection failed']));
}

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data->email) && isset($data->password)) {
    $email = $conn->real_escape_string($data->email);
    $password = $conn->real_escape_string($data->password);

    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode(['status' => 'success', 'user' => $user]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid credentials']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}

$conn->close();
?>
