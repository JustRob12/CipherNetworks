// src/component/tokenUtils.js

export const generateToken = () => {
    // Generate a random token (for example purposes)
    const token = Math.random().toString(36).substring(2, 15);
    return token;
  };
  
  export const refreshToken = () => {
    const newToken = generateToken();
    localStorage.setItem('refreshToken', newToken);
    return newToken;
  };
  