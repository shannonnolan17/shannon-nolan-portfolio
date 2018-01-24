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

          <div className="project-descriptions flex-parent">
            <div className="forever-aloaner">
              <img className="project-image" src={require('../landing-page.png')} alt="Forever Aloaner Home Page"/>
              <p>Forever Aloaner is a full rails web application that allows users to interact, chat, loan, and borrow items from one another. Some features include:</p>
              <ul>
                <li>Users can create an account and post an item they want to loan</li>
                <li>Users can search for items by keyword. Our zipcode API key is no longer working so searching by zip-code is currently not working.</li>
                <li>Users can visit the profile of a loaner or borrower they are interested in working with</li>
                <li>Users can review a person they have borrowed from</li>
                <li>Users can review a person they have loaned an item to</li>
                <li>In-app private messaging</li>
              </ul>
              <a href="https://foreveraloaner.herokuapp.com/">See it deployed!</a>
            </div>


            <div className="good-grief">
              <img className="project-image" src={require('../home_page.png')} alt="Forever Aloaner Home Page"/>
            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default Projects;