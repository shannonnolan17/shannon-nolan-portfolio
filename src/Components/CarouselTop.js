import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class CarouselTop extends Component {
  render() {
    return (
      <div className="Carousel">
        <div class="container">
          <h2>Carousel Example</h2>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <img src={require('./IMG_6849.jpg')} alt="SF1" style="width:100%;"/>
              </div>

              <div class="item">
                <img src={require('./IMG_6540.jpg')} alt="SF2" style="width:100%;"/>
              </div>

              <div class="item">
                <img src={require('./IMG_6860.jpg')} alt="SF3" style="width:100%;"/>
              </div>
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;