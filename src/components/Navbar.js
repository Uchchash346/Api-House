import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                        <div className="nav-title">
                            Api House
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/">About Us</a>
                        <a href="/">Contact Us</a>
                    </div>
            </div>
        </>
    );
};

export default Navbar;