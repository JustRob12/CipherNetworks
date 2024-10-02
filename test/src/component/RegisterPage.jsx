import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background"; // Adjust this import based on the file structure
import { Register } from "./Register"; // Import the Login form

export function RegisterPage() {
  return (
    <AuroraBackground>
      <Register />
    </AuroraBackground>
  );
}
