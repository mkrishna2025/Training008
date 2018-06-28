import React, { Component } from 'react';
import './home.css';
import MasterPage from '../../components/masterpage';

import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Home extends Component {
  onButtonClick() {
    //debugger;
    this.props.history.goBack();
  }
  render() {
    const params = this.props.location.params || {};
    const age = localStorage.getItem('age');
    const gender = sessionStorage.getItem('gender');
    return (
      <MasterPage> Welcome to Home {params.userName}, {params.city}, {gender}, {age}
        <input type="button" value="Go Back" onClick={this.onButtonClick.bind(this)} />
        <Carousel showArrows={false}>
          <div>
            <img src="/assets/1.jpg" />
            <p className="legend">Welcome to Home</p>
          </div>
          <div>
            <img src="assets/2.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="assets/4.jpg" />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img src="assets/5.jpg" />
            <p className="legend">Legend 5</p>
          </div>
        </Carousel>
      </MasterPage>
    );
  }
}