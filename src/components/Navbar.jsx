import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '/react.svg';
import '../assets/logo.css';

export default function Navbar() {

  const navLinksRef = useRef([]);

  const colorLink = (e) => {
    navLinksRef.current.forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  useEffect(() => {
    const links = navLinksRef.current;
    links.forEach((link) => link.addEventListener('click', colorLink));
    return () => {  
      links.forEach((link) => link.removeEventListener('click', colorLink));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand me-auto" to='/'>React Koperasi</Link>
        <Link to="/" style={{ paddingLeft: '10px' }}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
        <button className="navbar-toggler pe-8" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link ref={(el) => (navLinksRef.current[0] = el)} className="nav-link mx-lg-2 active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link ref={(el) => (navLinksRef.current[1] = el)} className="nav-link mx-lg-2" to='contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <a href="/login" className="login-button">Login</a>
      </div>
    </nav>
  );
}
