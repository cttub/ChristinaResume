import React, { Component } from 'react';
import '../Style/skills.css';
import miniCloud from '../Assets/smallCloud.svg';
import flipCloud from '../Assets/cloudFlip.svg';
import SkillsSmall from './SkillsSmall';
import Fade from 'react-reveal/Fade';
class Skills extends Component {
    state = {  } 
    render() { 
        return (
            <div id='skills'>
                     <img className='skillCloudOne skillCloud cloudFloat' src={miniCloud}/>
                     <img className='skillCloudTwo skillCloud cloudFloat' src={flipCloud}/>
                     <img className='skillCloudThree skillCloud cloudFloat' src={miniCloud}/>
                    <div className='inner-boxes'>
                           <Fade left duration = {1400}><div className='skill-box box col-lg-4'>
                                <h1 className='title'>Skillsets</h1>
                                <div className='inner-box'>
                             
                                    <div className='pill-column'>
                                            <p className='skill-pill java'>Java</p>
                                            <p className='skill-pill html'>HTML</p>
                                            <p className='skill-pill javascript'>Javascript</p>
                                    </div>
                                    <div  className='pill-column'>
                                      <p className='skill-pill react'>React.js</p>
                                      <p className='skill-pill css'>CSS</p>
                                      <p className='skill-pill filler'>Peekaboo</p>

                                    </div>
                                  
                                </div>
                            </div></Fade> 
                            
                            <Fade right duration = {1400}><div className='program-box box col-lg-4'>
                                <h1 className='title'>Programs</h1>
                                <div className='inner-box'>
                                    <div className='program-column'>
                                        <div className='app procreate'></div>
                                        <div className='app slack'></div>
                                    </div>
                                    <div className='program-column'>
                                        <div className='app adobe'></div>
                                        <div className='app wordpress'></div>

                                    </div>
                                    <div className='program-column'>
                                        <div className='app figma'></div>
                                        <div className='app canva'></div>
                                    </div>
                                    <div className='program-column'>
                                        <div className='app miro'></div>
                                        <div className='app filler'></div>

                                    </div>
                                </div>

                            </div></Fade>
                      </div>
                      <div className='smaller-device-boxes'>
                         <SkillsSmall/>
                      </div>

            </div>
        );
    }
}
 
export default Skills;