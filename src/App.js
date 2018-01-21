import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Navbar, Jumbotron, Button, Modal } from 'react-bootstrap';

class App extends Component {

  constructor() {
    this.state = { tabIndex: 0 };
  }


  render() {
    return (
      <div className="App">
        <div className='navbars fixed-top'>
          <NavBar />
        </div>

        <div className="flex-parent">

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

        <div className="carousel-caption flex-parent carousel-text">
          <h1 className="carousel-title responsive-text">SHANNON NOLAN</h1>
        </div>

        </div>

        <div>
          <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>

        <div>
          <AboutMe />
        </div>

      </div>
    );
  }
}

export default App;
