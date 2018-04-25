import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ContactMe from './ContactMe';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbars">
        <nav class="nav nav-pills nav-fill">
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact Me</Link>
          <a class="nav-item nav-link" href="#">Contact Me</a>
        </nav>

      </div>
    );
  }
}

export default NavBar;