import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../assets/cn192.png'; // Adjust the path based on where you save the logo image
import './Register.css'; // Import your CSS file

export function Register() {
  const navigate = useNavigate(); // Initialize navigate
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [year, setYear] = useState('1st year'); // Default to 1st year
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here, e.g., API call
    console.log('Registration attempted with:', firstName, lastName, middleName, schoolId, year, email, password);
    
    // Optionally navigate to a success page or login page after successful registration
    navigate('/login'); // Redirect to the login page after registration
  };

  return (
    <div className="register-container">
      
      <div className="register-box">

        {/* Logo and Name Section */}
        <div className="flex items-center mb-7 gap-2">
          <img src={logo} alt="CipherNet Logo" className="w-8 h-8" /> {/* Adjust width and height as needed */}
          <p className="text-lg text-white font-bold">CipherNet</p> {/* Name text */}
        </div>

        <h1 className="register-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-row">
            <div className="input-group half">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group half">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group full">
              <label htmlFor="middleName">Middle Name</label>
              <input
                type="text"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half">
              <label htmlFor="schoolId">School ID</label>
              <input
                type="text"
                id="schoolId"
                maxLength={9}
                value={schoolId}
                onChange={(e) => setSchoolId(e.target.value)}
                required
                placeholder="0000-0000"
              />
            </div>
            <div className="input-group half">
              <label htmlFor="year">Year</label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              >
                <option value="1st year">1st year</option>
                <option value="2nd year">2nd year</option>
                <option value="3rd year">3rd year</option>
                <option value="4th year">4th year</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group full">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <div className="login-link">
          Already have an account? 
          <button onClick={() => navigate('/login')} className="login-button">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
