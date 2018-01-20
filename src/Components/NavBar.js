import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;