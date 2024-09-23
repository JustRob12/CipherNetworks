// App.jsx
import React from 'react';
import './index.css';
import { ThreeDCardDemo } from './test';

function App() {
  return (
    <div>
      <ThreeDCardDemo imageSrc="/my-acetrack-qrcode.jpeg" /> {/* Ensure the path starts with / */}
    </div>
  );
}

export default App;
