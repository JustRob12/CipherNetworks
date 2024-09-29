<!-- backend/app/views/students/create.php -->
<h2>Create Student</h2>
<form action="/students/store" method="POST">
    <label>First Name: <input type="text" name="fName" required></label><br>
    <label>Last Name: <input type="text" name="lName" required></label><br>
    <label>Middle Name: <input type="text" name="mName"></label><br>
    <label>School ID: <input type="text" name="schoolId" required></label><br>
    <label>Year: <input type="text" name="year" required></label><br>
    <label>Email: <input type="email" name="email" required></label><br>
    <label>Password: <input type="password" name="password" required></label><br>
    <button type="submit">Create</button>
</form>
