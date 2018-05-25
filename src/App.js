import React, { Component } from 'react';
import './App.sass';
import logo from './logo.svg';
import './App.css';
// import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
// import Main from './Components/Main';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ContactMe from './Components/ContactMe';
import Projects from './Components/Projects';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import {withRouter} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Navbar, Jumbotron, Button, Modal } from 'react-bootstrap';

class App extends Component {

  constructor() {
    super()

    this.state = { tabIndex: 0 };
  }


  render() {
    return (

      <div>
        <div className='navbars fixed-top'>

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

        <div className="tab-section">
          <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>

            <div className="tab flex-parent">
              <Tab>About Me</Tab>
              <Tab>Projects</Tab>
            </div>

            <TabPanel>
              <div>
                <AboutMe />
              </div>
            </TabPanel>
            <TabPanel>
              <Projects />
            </TabPanel>
          </Tabs>
        </div>

        <div className="footer">
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
