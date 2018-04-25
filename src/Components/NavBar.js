import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ContactMe from './ContactMe';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbars">
        <nav class="nav nav-pills nav-fill">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact Me</Link></li>
        </nav>

      </div>
    );
  }
}

export default NavBar;