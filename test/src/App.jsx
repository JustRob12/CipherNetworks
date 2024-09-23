// App.jsx
import React from 'react';
import './index.css';
import { AuroraBackgroundDemo } from './test';

function App() {
  return (
    <div>
      <AuroraBackgroundDemo/> {/* Ensure the path starts with / */}
    </div>
  );
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}


export default App;
