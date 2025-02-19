import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-dark text-white">
            <div className="container-fluid">
                {/* Title */}
                <h3 className="fs-3">Start Bootstrap</h3>
                {/* Burger button dropdown menu */}
                <div className="dropdown d-md-none">
                    <a href="" className="text-white fs-2" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                    {/* Dropdown menu */}
                    <ul className="bg-dark dropdown-menu dropdown-menu-start menu-fullwidth mt-0">
                        <li><a className="dropdown-item link-light" href="#">Home</a></li>
                        <li><a className="dropdown-item link-light" href="#">About</a></li>
                        <li><a className="dropdown-item link-light" href="#">Services</a></li>
                        <li><a className="dropdown-item link-light" href="#">Contact</a></li>
                    </ul>
                </div>
                {/* Nav menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fs-4">
                        <li className="nav-item">
                        <a className="nav-link link-light" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link link-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link link-light" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link link-light" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;