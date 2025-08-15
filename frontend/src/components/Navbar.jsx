

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ auth }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top w-100" style={{ width: '100vw', margin: 0, padding: 0, top: 0, left: 0, zIndex: 1030 }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => navigate('/') }>
          <img src="https://play-lh.googleusercontent.com/iVGnJZ88IVnGTjYZMwP--3HvCuoF0pRTodT1SoL5tHMZh2InBJrXWAj2tkr5peEPQgGz=w240-h480-rw" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          Planner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarNav">
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center">
            {!auth || !auth.isAuthenticated ? (
              <>
                <button className="btn btn-outline-primary me-lg-2 mb-2 mb-lg-0" onClick={() => navigate('/login')}>Login</button>
                <button className="btn btn-primary" onClick={() => navigate('/register')}>Register</button>
              </>
            ) : (
              <button className="btn btn-danger" onClick={() => { if (auth && auth.logoutUser) auth.logoutUser(); navigate('/logout'); }}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


