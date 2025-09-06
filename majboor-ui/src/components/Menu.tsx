import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HEADER_TITLE, NAV_LABELS } from '../utils/Constants';

const Menu = () => {
    const [activeNav, setActiveNav] = useState('home');
    const [showLearnDropdown, setShowLearnDropdown] = useState(false);

    const handleNavClick = (nav: string) => {
        setActiveNav(nav);
    };

    const renderNavItem = () => {
        return NAV_LABELS.map((item) =>(
            <li className="nav-item">
                            <a className={`nav-link ${activeNav === item ? 'active' : ''}`}
                               onClick={() => handleNavClick(item)}
                               href="#">{item}</a>
            </li>))
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{HEADER_TITLE}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
                               onClick={() => handleNavClick('home')}
                               href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
                               onClick={() => handleNavClick('about')}
                               href="#">About</a>
                        </li>
                        <li className="nav-item dropdown position-static"
                            onMouseEnter={() => setShowLearnDropdown(true)}
                            onMouseLeave={() => setShowLearnDropdown(false)}>
                            <a className={`nav-link dropdown-toggle ${activeNav === 'learn' ? 'active' : ''}`}
                               onClick={() => handleNavClick('learn')}
                               href="#"
                               role="button"
                               aria-expanded={showLearnDropdown}
                            >Learn</a>
                            {showLearnDropdown && (
                                <ul className="dropdown-menu show" style={{ position: 'absolute', top: '100%', left: 0 }}>
                                    <li><a className="dropdown-item" href="#">Course 1</a></li>
                                    <li><a className="dropdown-item" href="#">Course 2</a></li>
                                    <li><a className="dropdown-item" href="#">Course 3</a></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`}
                               onClick={() => handleNavClick('contact')}
                               href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;