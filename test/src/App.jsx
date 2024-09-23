// App.jsx
import React from 'react';
import id from "./assets/my-acetrack-qrcode.jpeg";
import './index.css';
import { ThreeDCardDemo } from './test';

function App() {
  return (
    <div>
      <ThreeDCardDemo imageSrc={id} /> {/* Ensure the path starts with / */}
    </div>
  );
}

export default App;
