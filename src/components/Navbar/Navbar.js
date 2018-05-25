import React from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="masthead mb-auto">
                <div className="inner">
                    <h3 className="masthead-brand">Example</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        <NavLink exact className="nav-link" to={"/"}>Home</NavLink>
                        <NavLink className="nav-link" to={"/about"}>About</NavLink>
                        <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;




