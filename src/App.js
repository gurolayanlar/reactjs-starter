import React, { Component} from "react";
import Routes from './Routes';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

class App extends React.Component{
  render(){
    return(
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Navbar/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;