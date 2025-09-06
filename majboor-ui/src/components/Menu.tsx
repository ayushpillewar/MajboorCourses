import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NAV } from '../utils/Constants';

const Menu = () => {
    const [activeNav, setActiveNav] = useState('home');

    const handleNavClick = (nav: string) => {
        setActiveNav(nav);
    };

    const renderNavItems = () => {
       
            
                
            
    }


    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Majboor Courses</a>
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
                        <li className="nav-item">
                            <a className={`nav-link ${activeNav === 'learn' ? 'active' : ''}`}
                               onClick={() => handleNavClick('learn')}
                               href="#">Learn</a>
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