<?php

require_once __DIR__ . '/../../controllers/StudentController.php';


$controller = new StudentController();


$students = json_decode($controller->index(), true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student List</title>
    <link rel="stylesheet" href="./assets/styles.css"> <!-- Add your CSS file -->
</head>
<body>
    <h1>Student List</h1>
    <a href="/students/create">Add New Student</a>
    
    <?php if (empty($students)): ?>
        <p>No students found.</p>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Middle Name</th>
                    <th>School ID</th>
                    <th>Year</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($students as $student): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($student['fName']); ?></td>
                        <td><?php echo htmlspecialchars($student['lName']); ?></td>
                        <td><?php echo htmlspecialchars($student['mName']); ?></td>
                        <td><?php echo htmlspecialchars($student['SchoolId']); ?></td>
                        <td><?php echo htmlspecialchars($student['year']); ?></td>
                        <td><?php echo htmlspecialchars($student['email']); ?></td>
                        <td>
                            <a href="/students/show/<?php echo $student['id']; ?>">View</a> |
                            <a href="/students/delete/<?php echo $student['id']; ?>" onclick="return confirm('Are you sure you want to delete this student?');">Delete</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</body>
</html>
