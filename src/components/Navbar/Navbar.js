import React from 'react';

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
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/about">About</a>
                        <a className="nav-link" href="/contact">Contact</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;




