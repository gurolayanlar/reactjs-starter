import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>Example template for
                    <a href="https://getbootstrap.com/">Bootstrap</a>, by
                    <a href="https://twitter.com/gurolayanlar">@gurolayanlar</a>.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;