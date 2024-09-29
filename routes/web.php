<?php
// routes/web.php

require_once (__DIR__.'/../app/controllers/StudentController.php');

$controller = new StudentController();

// Capture the request URI
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Output the current request URI for debugging


if ($uri === '/students') {
    $controller->index();
} elseif ($uri === '/students/create') {
    $controller->create();
} elseif ($uri === '/students/store') {
    $controller->store();
} else {
    // Handle unknown routes
    echo "404 Not Found";
}
