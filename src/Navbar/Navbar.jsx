import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import PragyaaLogo from "../assets/pragyaa.png";
import MenuIcon from "../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import { scroller } from "react-scroll";
import Squares from "../Background/Squares";
import Team from "../Team/Team";

const Header = ({ isHomePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

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
      scroller.scrollTo(sectionId, { smooth: true, duration: 200 });
    } else if (path === "/" && sectionId) {
      navigate(path);
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 200 });
      }, 100);
    } else {
      navigate(path);
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrollDirection === "down" ? "hidden" : ""}`} style={{ whiteSpace: "nowrap" }}>
      <nav id="navbar" className="navbar">
        <div id="logo" className="me-auto">
          <button onClick={() => handleNavigation("/", "contentBox")}>
            <img
              src={PragyaaLogo}
              className="logo"
              alt="Pragyaa Logo"
              style={{ height: "7rem" }}
            />
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className={`navbar-nav ${menuOpen ? "open" : ""}`}>
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
              onClick={() => handleNavigation("/events")}
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
              className="nav-item nav-link"
              onClick={() => handleNavigation("/team")}
            >
              TEAM
            </a>
          </li>
          <li>
            <a
              className="nav-link scrollto"
              href="#events"
              onClick={() => handleNavigation("/events")}
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
              onClick={() => handleNavigation("/", "contact")}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;