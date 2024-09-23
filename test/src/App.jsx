// App.jsx
import React from 'react';
import './index.css';
import myImage from './my-acetrack-qrcode.jpeg';
import { ThreeDCardDemo } from './test';


function App() {
  return (
    <div>
      <ThreeDCardDemo imageSrc={myImage} /> {/* Pass the image as a prop */}
    </div>
  );
}

export default App;