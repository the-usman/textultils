import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    {props.title}
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" // Correct the value here (use the ID of the target element)
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <div
                        className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'
                            }`}
                    >
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onClick={props.modeFunc}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            {`${props.mode.charAt(0).toUpperCase() + props.mode.slice(1)}`}{' '}
                            Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
