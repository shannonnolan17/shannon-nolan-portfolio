import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ContactMe from './ContactMe';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbars">
        <nav class="nav nav-pills nav-fill">
          <a class="nav-item nav-link active" href="#">Home</a>
          <a class="nav-item nav-link" href="#">Contact Me</a>
          <a class="nav-item nav-link" href="#">Link</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
        </nav>

      </div>
    );
  }
}

export default NavBar;