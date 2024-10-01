
<?php
require_once './app/controllers/StudentCotroller.php';

$controller = new StudentController();

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($uri == '/students' && $requestMethod == 'GET') {
    $controller->index();
} elseif ($uri == '/students/store' && $requestMethod == 'POST') {
    $controller->store();
} elseif (preg_match('/\/students\/(\d+)/', $uri, $matches) && $requestMethod == 'GET') {
    $controller->show($matches[1]);
} elseif (preg_match('/\/students\/(\d+)/', $uri, $matches) && $requestMethod == 'DELETE') {
    $controller->delete($matches[1]);
} else {
    // Handle unknown routes
    echo json_encode(["message" => "404 Not Found"]);
}
