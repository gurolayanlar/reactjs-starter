import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

class Routes extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default Routes
