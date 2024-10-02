import React from 'react';
import './Header.css'; // Add your CSS for styling

export function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <h1 className="logo">CODEBYTERS</h1>
      </div>
      <div className="header-right">
        <a 
          href="https://www.facebook.com/roberto.prisoris" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-button"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
