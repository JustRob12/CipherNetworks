import React, { useState } from 'react';
import { Login } from './component/Login';
import { Register } from './component/Register';
import './component/Register.css'; // Ensure this CSS file exists
import './index.css'; // Ensure this file exists for global styles
import { AuroraBackgroundDemo } from './test'; // The background component

function App() {
  // State to toggle between login and register view
  const [currentView, setCurrentView] = useState('login');

  // Handlers to switch between Login and Register components
  const handleNavigateToRegister = () => setCurrentView('register');
  const handleNavigateToLogin = () => setCurrentView('login');

  return (
    <div>
      {/* AuroraBackgroundDemo wraps the content for the animated background */}
      <AuroraBackgroundDemo>
        {/* Conditional rendering to switch between Login and Register */}
        {currentView === 'login' ? (
          <Login onNavigateToRegister={handleNavigateToRegister} />
        ) : (
          <Register onNavigateToLogin={handleNavigateToLogin} />
        )}
      </AuroraBackgroundDemo>
    </div>
  );
}

// Registering service worker for offline capabilities (PWA functionality)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

export default App;
