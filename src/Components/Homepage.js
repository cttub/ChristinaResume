import React, { Component } from 'react';
import '../Style/home.css';
import ReactFullpage from '@fullpage/react-fullpage';

import Landing from './Landing';
import Career from './Career';
import Skills from './Skills';

const licenseKey = '5OHLK-PXI0J-1K60I-BJ6SI-TOONN';

class Homepage extends Component {
  state = {};


  render() {
    const fullpageOptions = {
        scrollingSpeed: 1000,
        navigation: true
      };
      
  
    return (
        
        <ReactFullpage
        licenseKey={licenseKey}
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
          
              <div className='section'>
                <Landing />
              </div>
              <div className='section'>
                <Career />
              </div>
              <div className='section'>
                <Skills />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Homepage;
