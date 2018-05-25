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
      <nav>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact Me</Link>
        </div>
        <div>
          <Route path="/" component={App}/>
          <Route path="/contact" component={ContactMe}/>
        </div>
      </nav>
    );
  }
}

export default NavBar;