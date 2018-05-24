import React from 'react';
import { Link } from "react-router-dom";

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
                        <Link className="nav-link" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/about"}>About</Link>
                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;




