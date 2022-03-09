import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navBar'>
      <ul>
        <li><Link to="/">🌸 Home 🌸</Link></li>
        <li><Link to="/about">🌸 About 🌸</Link></li>
        <li><Link to="/projects">🌸 Projects 🌸</Link></li>
        <li><Link to="/connect">🌸 Connect 🌸</Link></li>
        <li><Link to="/resume">🌸 Resume 🌸</Link></li>
      </ul>
    </nav>
  );
}
