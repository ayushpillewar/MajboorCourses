import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HEADER_TITLE, NAV_LABELS } from "../utils/Constants";
import DropDown from "./DropDown";

const Menu = () => {
  const [activeNav, setActiveNav] = useState("home");

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
  };

  const renderNavItem = () => {
    return NAV_LABELS.map((item) => (
      <li className="nav-item">
        <a
          className={`nav-link ${activeNav === item ? "active" : ""}`}
          onClick={() => handleNavClick(item)}
          href="#"
        >
          {item}
        </a>
      </li>
    ));
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {HEADER_TITLE}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "home" ? "active" : ""}`}
                onClick={() => handleNavClick("home")}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "about" ? "active" : ""}`}
                onClick={() => handleNavClick("about")}
                href="#"
              >
                About
              </a>
            </li>
            <DropDown activeNav={activeNav} handleNavClick={handleNavClick} />

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeNav === "contact" ? "active" : ""
                }`}
                onClick={() => handleNavClick("contact")}
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
