import React, { Component } from 'react';

class SkillsSmall extends Component {
    state = {  } 
    render() { 
        return (
            <div className='smaller-skill'>
            
                 <div style={{marginTop: "200px"}} className='skill-box' id='skillsTiny'>
                        <h1>Skills</h1>
                        <div className='inner-skill'>
                            
                            <div className='pill-column'>
                                <p className='skill-pill java'>Java</p>
                                <p className='skill-pill html'>HTML</p>
                            </div>
                            <div className='pill-column'>
                                <p className='skill-pill react'>React.js</p>
                                <p className='skill-pill css'>CSS</p>
                            </div>
                            <div className='pill-column'>
                                <p className='skill-pill javascript'>Javascript</p>
                                <p className='skill-pill filler'>Filler</p>
                            </div>
                        </div>
                </div>
                <div className='program'>
                    <h1>Programs</h1>
                    <div className='inner-program'>
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

                </div>
            </div>
        );
    }
}
 
export default SkillsSmall;