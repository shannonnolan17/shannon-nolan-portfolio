import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import ContactMe from './ContactMe';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main';
import App from '../App';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbars">
          <nav class="nav nav-pills nav-fill">

            <div>
              <Link to='/'>Home</Link>
              <Link to='/contact'>Contact Me</Link>
            </div>

          </nav>

      </div>
    );
  }
}

export default NavBar;