import React, { Component } from 'react';
import '../Style/career.css';
import balloonGirl from '../Assets/Balloon.png';
import miniCloud from '../Assets/smallCloud.svg';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
class Career extends Component {
    state = {  } 
    render() { 
        return (
            <div id='career'>
                <img className='miniCloudTwo cloudsmall cloudFloat' src={miniCloud}/>
                <img className='miniCloud cloudsmall cloudFloat' src={miniCloud}/>
                <div className='career-info col-lg-5 col-sm-12'>
                    <h1>Career Goals</h1>
                    <p>
                    My career goals align with expressing my 
                    creative craftsmanship and skills. Continuous 
                    growth and learning new skill sets also allows
                     my passion to spark within my work ethic. 
                     I aspire to cultivate my passion, enhance my 
                     abilities, and make valuable contributions to
                      my team, clients, and projects.
                    </p>
                   
                    <Link className='navigation-btn text-nav'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/MyWork"> <button>See my experience</button> 
                    </Link>
                </div>
                <Fade down duration = {2000}>
                    <div className='col-lg-3'>
                     <img className='floating girlBalloon' src={balloonGirl}/>
                    </div>
                </Fade>

            </div>
        );
    }
}
 
export default Career;