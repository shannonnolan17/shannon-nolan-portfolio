import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ContactMe from './ContactMe';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Home</a>
          <p>Contact Me</p>
            <ContactMe />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;