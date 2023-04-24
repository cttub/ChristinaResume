import React, { Component } from 'react';
import '../Style/home.css';

import bunny from '../Assets/Bunny.png';
import Fade from 'react-reveal/Fade';
import cloud1 from '../Assets/Cloud.svg';
import cloudShadow1 from '../Assets/CloudShadow.svg';

class Landing extends Component {
  state = {};



  render() {
    return (
      <div id='home'>
        <Fade left duration={2000}>
            <img className='cloudOne cloud' src={cloud1} />
            <img className='cloudFloat cloudShadowOne cloud' src={cloudShadow1} />
        </Fade>
        <Fade right duration={2000}>
          <img className='cloudFloat cloudTwo cloud' src={cloud1} />
          <img className='cloudFloat cloudShadowTwo cloud' src={cloudShadow1} />
        </Fade>
        <div className='landing'>
          <div>
            <img className='floatingGirl floating' src={bunny} />
          </div>
          <div className='landing-txt col-lg-6'>
            <h1>Christina Bui</h1>
            <p>
              Highly motivated and dedicated developer seeking to further
              develop foundational skills and make a positive impact in the
              industry.
            </p>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
