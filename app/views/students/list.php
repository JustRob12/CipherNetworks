<!-- backend/app/views/students/list.php -->
<h2>List of Students</h2>
<a href="/students/create">Add New Student</a>
<table border="1">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School ID</th>
            <th>Year</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($row = $result->fetch(PDO::FETCH_ASSOC)) : ?>
            <tr>
                <td><?php echo $row['fName']; ?></td>
                <td><?php echo $row['lName']; ?></td>
                <td><?php echo $row['schoolId']; ?></td>
                <td><?php echo $row['year']; ?></td>
                <td><?php echo $row['email']; ?></td>
            </tr>
        <?php endwhile; ?>
    </tbody>
</table>
