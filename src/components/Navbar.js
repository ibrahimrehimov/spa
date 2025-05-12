import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#6200ea', padding: '10px', display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Haqqında</Link>
      <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>İşlər</Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Əlaqə</Link>
    </nav>
  );
}
