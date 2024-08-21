import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <div className="logo">
        <img src="p0j8pj6y.jpg.webp" alt="Logo"  /> 
<p> </p>
      </div>
    </header>
  );
}

export default Header;
