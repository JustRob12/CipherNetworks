import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background"; // Adjust this import based on the file structure
import { Header } from "./Header"; // Import your Header
import { Login } from "./Login"; // Import the Login form

export function LoginPage() {
  return (
    <AuroraBackground>
      <Header /> {/* Include the Header */}
      <div className="main-content"> {/* Add this container */}
        <Login />
      </div>
    </AuroraBackground>
  );
}
