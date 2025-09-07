import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function renderDropDownItems(dropdownItems: string[]) {
  return dropdownItems.map((item) => (
    <li>
      <a className="dropdown-item " href="#">
        {item}
      </a>
    </li>
  ));
}

function DropDown(props: {
  activeNav: string;
  handleNavClick: (nav: string) => void;
  dropdownItems: string[];
}) {
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={() => setShowLearnDropdown(true)}
      onMouseLeave={() => setShowLearnDropdown(false)}
    >
      <a
        className={`nav-link dropdown-toggle ${
          props.activeNav === "learn" ? "active" : ""
        }`}
        onClick={() => props.handleNavClick("learn")}
        href="#"
        role="button"
        aria-expanded={showLearnDropdown}
      >
        Learn
      </a>
      {showLearnDropdown && (
        <ul className="dropdown-menu show">
          {renderDropDownItems(props.dropdownItems)}
        </ul>
      )}
    </li>
  );
}

export default DropDown;
