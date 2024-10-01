
<h2>Create a New Student</h2>
<form action="/students/store" method="POST">
    <label for="fName">First Name:</label>
    <input type="text" id="fName" name="fName" required><br>

    <label for="lName">Last Name:</label>
    <input type="text" id="lName" name="lName" required><br>

    <label for="mName">Middle Name:</label>
    <input type="text" id="mName" name="mName"><br>

    <label for="SchoolId">School ID:</label>
    <input type="text" id="SchoolId" name="SchoolId" required><br>

    <label for="year">Year:</label>
    <input type="text" id="year" name="year" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>

    <button type="submit">Submit</button>
</form>
