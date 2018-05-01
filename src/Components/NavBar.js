import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ContactMe from './ContactMe';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbars">
        <Router>
          <nav class="nav nav-pills nav-fill">
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact Me</Link>
          </nav>
        </Router>

      </div>
    );
  }
}

export default NavBar;