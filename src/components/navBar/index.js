import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/">
                        <a className="navbar-item logo is-size-3">
                            polling-react
                        </a>
                    </Link>
                    <div
                        role="button"
                        className="navbar-burger burger"
                        data-target="navMenu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/login">
                                    <span
                                        className="button is-primary"
                                        style={{ marginRight: '10px' }}
                                    >
                                        <strong>Login</strong>
                                    </span>
                                </Link>
                                <Link to="/register">
                                    <span className="button is-light">
                                        Register
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
