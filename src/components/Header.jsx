import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // ESC key closes overlay
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-border-top" />
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-star">✦</span>
            MSP
            <span className="logo-star">✦</span>
          </div>
          <nav
            className={`nav${isOpen ? " is-open" : ""}`}
            id="site-nav"
            role="navigation"
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <span className="nav-dot">·</span>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <span className="nav-dot">·</span>
            <a href="#web-projects" onClick={closeMenu}>
              Web Projects
            </a>
            <span className="nav-dot">·</span>
            <a href="#graphic-designs" onClick={closeMenu}>
              Graphic Designs
            </a>
            <span className="nav-dot">·</span>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
          <div className="header-right">
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-controls="site-nav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className="header-border-bottom" />
    </header>
  );
}
