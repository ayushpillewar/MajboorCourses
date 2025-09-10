
import "bootstrap/dist/css/bootstrap.min.css";
import { HEADER_TITLE} from "../utils/Constants";
// import DropDown from "./DropDown";

const Menu = (props: {activeNav: string; setActiveNav: (nav:string)=> void}) => {
  
  const handleNavClick = (nav: string) => {
    props.setActiveNav(nav);
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
                className={`nav-link ${props.activeNav === "home" ? "active" : ""}`}
                onClick={() => handleNavClick("home")}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${props.activeNav === "about" ? "active" : ""}`}
                onClick={() => handleNavClick("about")}
                href="#"
              >
                About
              </a>
            </li>
            {/* <DropDown activeNav={props.activeNav} handleNavClick={handleNavClick} dropdownItems={LEARN_DROPDOWN_ITEMS}/> */}

            <li className="nav-item">
              <a
                className={`nav-link ${
                  props.activeNav === "contact" ? "active" : ""
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
