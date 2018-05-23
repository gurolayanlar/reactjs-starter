import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Example your page.</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium scelerisque posuere. Integer tempus, dui sit amet
    porta rhoncus</p>
        <p className="lead">
          <a href="https://github.com/gurolayanlar/angularjs-starter" className="btn btn-lg btn-secondary">Github</a>
        </p>
      </main>
    );
  }
}

export default Home;