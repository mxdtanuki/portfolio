import { useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
          <nav className={`nav ${isOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <span className="nav-dot">·</span>
            <a href="#about">About</a>
            <span className="nav-dot">·</span>
            <a href="#web-projects">Web Projects</a>
            <span className="nav-dot">·</span>
            <a href="#graphic-designs">Graphic Designs</a>
            <span className="nav-dot">·</span>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-right">
            <button className="menu-toggle" onClick={toggleMenu}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className="header-border-bottom" />
    </header>
  );
}
