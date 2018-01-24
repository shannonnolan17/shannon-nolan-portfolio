import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div>
          <h1 className="title responsive-text">Projects</h1>
          <div className="social">
            <p>Check out the projects on GitHub:</p>
            <a href="https://github.com/shannonnolan17"><img className="social-icon" src="https://s10.postimg.org/t1xakfm7d/social-github.png" alt="github" /></a>
          </div>
          <div className="forever-aloaner">
            <img className="project-image" src={require('../landing-page.png')} alt="Forever Aloaner Home Page"/>
          </div>

          <div className="good-grief">
            <img className="project-image" src={require('../home_page.png')} alt="Forever Aloaner Home Page"/>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;