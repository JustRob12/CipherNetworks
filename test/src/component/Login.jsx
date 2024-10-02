import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  // Dummy credentials for the login
  const dummyAccount = {
    email: "admin@admin",
    password: "123"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if entered email and password match the dummy account
    if (email === dummyAccount.email && password === dummyAccount.password) {
      console.log('Login successful');
      navigate('/dashboard'); // Navigate to Dashboard on successful login
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen">
      <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-md shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="flex-1 py-2 px-4 border border-cyan-400 rounded-md shadow-sm text-sm font-medium text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 flex justify-center text-sm">
          <a href="#" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-200">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
