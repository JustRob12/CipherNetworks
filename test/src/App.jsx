import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuroraBackgroundDemo } from "./test"; // Adjust the import based on your structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/login" element={<AuroraBackgroundDemo />} />
        <Route path="/register" element={<AuroraBackgroundDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
