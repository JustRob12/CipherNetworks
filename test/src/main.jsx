import React, { StrictMode } from 'react'; // Ensure React is imported
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import your App component
import './index.css'; // Import your global styles

// Create a root for your application
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the application
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
