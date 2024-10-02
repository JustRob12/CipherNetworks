// src/lib/api.js
export const registerUser = async (userData) => {
    const response = await fetch('http://localhost/backend/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    return response.json();  // Return the JSON response from the server
  };
  