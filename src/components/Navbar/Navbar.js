import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import './Navbar.css';


class Navbar extends Component {

    render () {
        return (
            <div className="Navbar"> 
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" id="navbar">
                        <NavLink to='/' className="navbar-brand">LASHED.BY.THUONG</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/portfolio' className="nav-link">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/pricing' className="nav-link">PRICING</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to='/book'><button type="button" className="btn" id="book">BOOK NOW</button></NavLink>
                            </li>
                            </ul>
                        </div>
                </nav>
                <p id="break"></p>
            </div>
        );
    }
}

export default Navbar;