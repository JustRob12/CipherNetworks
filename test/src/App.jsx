import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./component/Dashboard"; // Import your Dashboard component
import { LoginPage } from "./component/LoginPage";
import { RegisterPage } from "./component/RegisterPage"; // Import the LoginPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Register page route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
