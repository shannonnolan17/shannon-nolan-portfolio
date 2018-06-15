import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me container">
        <h1 className="container title responsive-text">About Me</h1>
        <div className="pictures">
          <img className="about-me-pic" src={require('../IMG_6489.JPG')} alt="me"/>
        </div>
        <div className="about-me-section paragraph-text container">
          <p>Welcome to my portfolio! I am a former teacher turned techie that loves all things web development. I graduated from West Chester University in 2015 with a bachelor's degree in Elementary Education. After graudating, I taught for two years in an elementary school before I decided I needed a change. I noticed that I always loved bringing technology into the classroom and that my favorite days were the ones that I could play around with the latest educational technology tools. This led to me realizing that I wanted to go into the tech world.

            In June of 2017 I decided I wanted to do a coding bootcamp after talking with a couple friends who went through similar programs. In my research, I came across DevBootcamp and instantly knew that was where I wanted to go. DevBootcamp is an 18 week intensive full-stack web development program that included individual challenges, group projects, and daily pair programming. Built dynamic web applications with Ruby on Rails, React, HTML5, CSS, and JavaScript. I applied and got in and traveled to San Francisco in order to complete the program in November of 2017. As the last cohort of DevBootcamp, I had the unique opportunity to stay for a couple extra weeks and complete two final projects. Both of these projects can be found under the project tab. It has been a whirlwind experience but definitely the best decision of my life. </p>

              <p><strong>Currently, I am looking for a job as Software Engineer in San Francisco, CA. My skills include:</strong></p>
              <ul>
                <li>Ruby on Rails</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Ruby</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>And many more!</li>
              </ul>
            </div>
          <div className= "flex-parent">
            <div className="flex-child hobbies">
              <h3>Hobbies and Likes:</h3>
              <ul>
              <li>Photography</li>
              <li>Running</li>
              <li>Yoga</li>
              <li>Music</li>
              <li>Cookies</li>
              <li>Dogs</li>
              <li>Makeup</li>
              <li>TV/Netflix</li>
              <li>Dogs</li>
              <li>Pizza</li>
              </ul>
            </div>

            <div className="flex-child learning">
              <h3>What am I up to?</h3>
              <p>I'm always learning! Currently I am learning all about...</p>
              <ul>
              <li>SASS</li>
              <li>Flex Box</li>
              <li>Carousels</li>
              <li>Sticky stuff</li>
              <li>Python</li>
              <li>Redux</li>
              <li>Elixir</li>
              <li>Phoenix</li>
              <li>All the APIs</li>
              </ul>
            </div>
        </div>

      </div>
    );
  }
}

export default AboutMe;