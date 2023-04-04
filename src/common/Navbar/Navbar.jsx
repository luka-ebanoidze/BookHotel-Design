import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { FiClock } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            {click ? <GrClose className="icon" /> : <FaBars className="icon" />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={closeMobileMenu}>
                Desctination
              </Link>
            </li>
            <li>
              <Link to="/bog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonail" onClick={closeMobileMenu}>
                Testimonail
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in" className="link">Sign In</Link>
            </li>
            <li>
              <Link to="/register" className="link">Register</Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src='images/logo.png' alt="" />
          </div>

          <div className="contact flex_space">
            <div className="box flex_space">
              <div className="icons">
                <FiClock className="icon" />
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <FiPhoneCall className="icon" />
              </div>
              <div className="text">
                <h4>Call Us</h4>
                <Link to="/contact">+011 123 4567</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <FiMail className="icon" />
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">info@example.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
