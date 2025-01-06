import React from "react";
import { Link } from "react-router-dom";
import SwitchTheme from "../SwitchTheme.tsx";
function Navbar() {
    const [isActive, setIsActive] = React.useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive)
    }

    return (
        <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a
                    role="button"
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded={isActive}
                    onClick={toggleNavbar}
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link to="/" className="navbar-item is-tab">Home</Link>
                    <Link to="/blogs" className="navbar-item is-tab">Read Blogs</Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">More</a>
                        <div className="navbar-dropdown">
                            <Link to="/about_me" className="navbar-item">About Me</Link>
                            <Link to="/contact_info" className="navbar-item">Contact Info</Link>
                            <Link to="/newsletter" className="navbar-item">Newsletter</Link>
                            <hr className="navbar-divider"/>
                            <Link to="funny_joke" className="navbar-item">A Funny Joke</Link>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <SwitchTheme/>
                            <a className="button is-primary is-rounded">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light is-rounded">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
