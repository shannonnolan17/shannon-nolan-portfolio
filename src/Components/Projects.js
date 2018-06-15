import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div>
          <h1 className="title responsive-text">Projects</h1>
          <div className="social">
            <p className="second-title">Check out the projects on GitHub:
            <a id="github-pic" href="https://github.com/shannonnolan17"><i id="social-gp" className="social-icon fa fa-github fa-3x social"></i></a>
            </p>

          </div>

          <h2>The Big Projects</h2>
          <div className="container project-descriptions paragraph-text flex-parent">

          <section className="container">
            <div className="container forever-aloaner">
              <img className="project-image flex-child" src={require('../landing-page.png')} alt="Forever Aloaner Home Page"/>
              <p className="flex-child">Forever Aloaner is a full rails web application that allows users to interact, chat, loan, and borrow items from one another. Some features include:</p>
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
          </section>

          <section className="container">
            <div className="container good-grief vertical-line">
              <img className="project-image flex-child" src={require('../home_page.png')} alt="Forever Aloaner Home Page"/>
              <p className="project-text flex-child">Good Grief is a mobile-first web application that strives to assist people move through the five stages of grief after a relationship dissolution. It aims to facilitate the process of healing from a broken heart by providing a collection of resources specifically tailored to each stage, as well as a safe environment to connect with others going through similar experiences. Some features include:</p>
              <ul>
                <li>Users can set goals and delete them upon completion</li>
                <li>Users can write journal entries that are timestamped and read previous entries</li>
                <li>Users can take a quiz to determine if they ready to move on from their current stage</li>
                <li>Users can chat with other users who are in the same stage in a chatroom</li>
              </ul>
            </div>
          </section>
          </div>


        </div>

      </div>
    );
  }
}

export default Projects;