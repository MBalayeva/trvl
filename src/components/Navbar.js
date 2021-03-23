import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from './Button.js';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {setClick(!click)};
    const closeMobileMenu = () => {setClick(false)};
    const buttonSize = () => {
        if(window.innerWidth<960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', buttonSize);

    useEffect(() => { buttonSize() }, []);

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/products"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-link-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button setStyle='btn--outline'>Sign up</Button>}
        </div>
      </nav>
    );
}

export default Navbar
