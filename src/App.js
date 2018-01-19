import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CarouselTop from './Components/CarouselTop';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Navbar, Jumbotron, Button, Modal } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navbars fixed-top'>
          <NavBar />
        </div>

        <div className="container-flex img-overlay">

        <Carousel className="carousel" autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop={true}>
          <div>
            <img className="carousel-image" src={require('./IMG_6849.JPG')} alt="SF1"/>
          </div>
          <div>
            <img className="carousel-image" src={require('./IMG_6540.jpg')} alt="SF2"/>
          </div>
          <div>
            <img className="carousel-image" src={require('./IMG_6860.JPG')} alt="SF3"/>
          </div>
        </Carousel>

        <div className="carousel-caption carousel-text">
          <h1 className="carousel-title">Shannon Nolan</h1>
        </div>

        </div>

      </div>
    );
  }
}

export default App;
