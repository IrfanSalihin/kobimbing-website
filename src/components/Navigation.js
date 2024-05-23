import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Navigation.css';

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  const handleMouseEnter = () => {
    setShowDropdown(true);
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Adjust delay as needed
    setHideTimeout(timeout);
  };

  return (
    <nav className="navigation">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Utama</Link></li>
        <li 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/tentang">Tentang Kami</Link>
          {showDropdown && (
            <div 
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/organisasi">Organisasi</Link>
              <Link to="/galeri">Galeri</Link>
              <Link to="/kerjaya">Kerjaya</Link>
            </div>
          )}
        </li>
        <li 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/keanggotaan">Keanggotaan</Link>
          {showDropdown && (
            <div 
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/tabung-dana-ar-rahnu">Tabung Dana Ar-Rahnu</Link>
            </div>
          )}
        </li>
        <li 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/perniagaan">Perniagaan</Link>
          {showDropdown && (
            <div 
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/pembiayaan">Pembiayaan</Link>
              <Link to="/perkhidmatan">Perkhidmatan</Link>
              <Link to="/hartanah">Hartanah</Link>
              <Link to="/ar-rahnu">Ar-Rahnu</Link>
              <Link to="/takaful">Takaful</Link>
            </div>
          )}
        </li>
        <li 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/lain">Lain-lain</Link>
          {showDropdown && (
            <div 
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/hubungi">Hubungi</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/muat-turun">Muat Turun</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
