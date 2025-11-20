
import "bootstrap/dist/css/bootstrap.min.css";
import { HEADER_TITLE} from "../utils/Constants";
// import DropDown from "./DropDown";

import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  
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
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            {/* <DropDown activeNav={props.activeNav} handleNavClick={handleNavClick} dropdownItems={LEARN_DROPDOWN_ITEMS}/> */}

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className={`nav-link ${location.pathname === "/product" ? "active" : ""}`}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/docs"
                className={`nav-link ${location.pathname === "/docs" ? "active" : ""}`}
              >
                docs
              </Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
