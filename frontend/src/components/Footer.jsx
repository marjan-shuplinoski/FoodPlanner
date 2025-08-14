import React from 'react';

const Footer = () => (
  <footer className="bg-light text-center py-3 w-100" style={{ position: 'fixed', bottom: 0, left: 0, width: '100vw', zIndex: 1020 }}>
    <span>
      &copy; 2025 Marjan Shuplinoski
      {' '}<a href="https://www.linkedin.com/in/marjan-shuplinoski/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </span>
  </footer>
);

export default Footer;
