import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me flex-parent">
        <h1 className="title inline-css responsive-text">About Me</h1>
        <div className="pictures flex-child">
          <img className="about-me-pic" src={require('../IMG_6489.JPG')} alt="me"/>
        </div>
        <div className="about-me-section flex-child">
          <p>Welcome to my portfolio! I am a former teacher turned techie that loves all things web development. I graduated from West Chester University in 2015 with a bachelor's degree in Elementary Education. After graudating, I taught for two years in an elementary school before I decided I needed a change. I noticed that I always loved bringing technology into the classroom and that my favorite days were the ones that I could play around with the latest educational technology tools. This led to me realizing that I wanted to go into the tech world.

            In June of 2017 I decided I wanted to do a coding bootcamp after talking with a couple friends who went through similar programs. In my research, I came across DevBootcamp and instantly knew that was where I wanted to go. I applied and got in and traveled to San Francisco in order to complete the program in November of 2017. It has been a whirlwind experience but definitely the best decision of my life. </p>

            <p>Currently, I am looking for a job as Software Engineer in San Francisco, CA. My skills include:</p>
            <ul>
              <li>Ruby on Rails</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Ruby</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default AboutMe;