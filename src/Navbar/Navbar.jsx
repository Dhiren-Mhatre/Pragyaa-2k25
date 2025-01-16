import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import PragyaaLogo from "../assets/pragyaa.png";
import MenuIcon from "../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; // Include the uploaded icon
import { scroller } from "react-scroll";
import Squares from '../Background/Squares';
const Header = ({ isHomePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path, sectionId) => {
    const mobileNav = document.querySelector(".navbar-mobile");
    if (mobileNav) {
      mobileNav.classList.add("closing");
      setTimeout(() => {
        mobileNav.classList.remove("closing");
      }, 300);
    }

    if (location.pathname === "/" && sectionId) {
      // If we're on the home page and have a section ID, just scroll
      scroller.scrollTo(sectionId, { smooth: true, duration: 200 });
    } else if (path === "/" && sectionId) {
      // If we're navigating to home with a section ID, navigate then scroll
      navigate(path);
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 200 });
      }, 100);
    } else {
      // For other routes, just navigate
      navigate(path);
    }

    setMenuOpen(false);
  };

  return (
    
    <div className="nav" style={{ whiteSpace: "nowrap" }}>
      <nav id="navbar" className="navbar">
        <div id="logo" className="me-auto">
        <button
              onClick={() => handleNavigation("/", "contentBox")}
            >
              <img src={PragyaaLogo} alt="Pragyaa Logo" style={{ height: "5rem" }} />
            </button>
          
        </div>

        {/* Desktop Navigation Menu */}
        <ul className={`navbar-nav ${menuOpen ? "open" : ""}`}>
          {/* <li>
            
          </li> */}
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "about")}
            >
              ABOUT US
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/schedule")}
            >
              SCHEDULE
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/team")}
            >
              TEAM
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "guestbox")}
            >
              EVENTS
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "gallery")}
            >
              GALLERY
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "sponsors")}
            >
              SPONSORS
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "faqs")}
            >
              FAQ's
            </button>
          </li>
          <li>
            <button
              className="nav-item nav-link"
              onClick={() => handleNavigation("/", "map")}
            >
              CONTACT
            </button>
          </li>
        </ul>

        {/* Mobile Navigation Menu */}
        <img
          src={MenuIcon}
          className="mobile-nav-toggle"
          alt="Menu Icon"
          onClick={toggleMenu}
        />
        {!isHomePage && (
        <div className="background-squares">
          <Squares
            speed={0.5}
            squareSize={70}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#ff0000'
            hoverFillColor='#ff0000'
          />
        </div>
      )}
      </nav>

      {/* Mobile Menu - Dropdown */}
      <nav className={`navbar-mobile ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              className="nav-link scrollto"
              href="#contentBox"
              onClick={() => handleNavigation("/", "contentBox")}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#about"
              onClick={() => handleNavigation("/", "about")}
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              onClick={() => handleNavigation("/schedule")}
            >
              SCHEDULE
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#guestbox"
              onClick={() => handleNavigation("/", "guestbox")}
            >
              TEAM
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#guestbox"
              onClick={() => handleNavigation("/", "guestbox")}
            >
              EVENTS
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#gallery"
              onClick={() => handleNavigation("/", "gallery")}
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#sponsors"
              onClick={() => handleNavigation("/", "sponsors")}
            >
              SPONSORS
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#faqs"
              onClick={() => handleNavigation("/", "faqs")}
            >
              FAQ's
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#map"
              onClick={() => handleNavigation("/", "map")}
            >
              CONTACT
            </a>
          </li>
        </ul>
        {!isHomePage && (
        <div className="background-squares">
          <Squares
            speed={0.5}
            squareSize={70}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#ff0000'
            hoverFillColor='#ff0000'
          />
        </div>
      )}
      </nav>
    </div>
  );
};

export default Header;
