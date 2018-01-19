import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import CarouselTop from './Components/CarouselTop'
import { Navbar, Jumbotron, Button, Modal } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navbars fixed-top'>
          <NavBar />
        </div>

        <div className='carousel'>
          <CarouselTop />
        </div>

      </div>
    );
  }
}

export default App;