import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background"; // Adjust this import based on the file structure
import { Login } from "./Login"; // Import the Login form

export function LoginPage() {
  return (
    <AuroraBackground>
      <Login />
    </AuroraBackground>
  );
}
