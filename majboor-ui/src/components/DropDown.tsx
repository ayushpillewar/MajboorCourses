import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DropDown({ activeNav, handleNavClick }: { activeNav: string; handleNavClick: (nav: string) => void }) {
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);

  return (
    <li
      className="nav-item dropdown position-static"
      onMouseEnter={() => setShowLearnDropdown(true)}
      onMouseLeave={() => setShowLearnDropdown(false)}
    >
      <a
        className={`nav-link dropdown-toggle ${
          activeNav === "learn" ? "active" : ""
        }`}
        onClick={() => handleNavClick("learn")}
        href="#"
        role="button"
        aria-expanded={showLearnDropdown}
      >
        Learn
      </a>
      {showLearnDropdown && (
        <ul
          className="dropdown-menu show"
          style={{ position: "absolute", top: "100%", left: 0 }}
        >
          <li>
            <a className="dropdown-item" href="#">
              Course 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Course 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Course 3
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}

export default DropDown;
