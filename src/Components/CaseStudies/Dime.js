import React, { Component } from 'react';
import './case.css';
import Fade from 'react-reveal/Fade';
import CaseNav from './CaseNav';
import BacktoTop from '../BackToTop';
class Dime extends Component {
  
    state = {  } 
    handleClick = () => {
        window.open('https://drive.google.com/file/d/1VJdTZVF2qUPOcoeBSExihqWNpqDUvgPi/preview', '_blank');
      };
      cancerX =()=>{
        window.open('https://cancerx.health/', '_blank');
      }
      projectPage =()=>{
        window.open('https://dimesociety.org/courses/applied-digital-health-ethics/', '_blank');
      }
      
    render() { 
        
        return (
            <div className='case-main' id='dime'>
                 <BacktoTop/>
                   <CaseNav
                    dimeActive ="active"
                    />
                <div className='heading'>
                        <div className='img-logo'></div>
                        <h3>Improving Quality of Work, and taking Project Leads for Optimal Performance.</h3>
                    </div>   
                
                <div>
                    <h3 style={{marginBottom: "-30px"}}>Summary</h3>
                    <p>While working at Digital Medicine Society, I completed tasks that enhanced workflow and delivered high-quality performance on diverse projects. In this case study, I will showcase the work challenges I tackled and the work qualities that enabled me to overcome them.</p>
                    <div state className='skillsets'>
                        <div className='skills'><p>Wordpress</p></div>
                        <div className='skills'><p>Slack</p></div>
                        <div className='skills'><p>Miro</p></div>
                        <div className='skills'><p>Asana</p></div>
                        <button onClick={this.handleClick}  className='downloadPDF'>View PDF Version</button>
                   </div>
                   
                </div>

            <h3 style={{marginBottom: "-30px"}}>Adaptability</h3>
            <p>Prior to my role at DiMe, I had no experience with Wordpress as I typically code websites from scratch. Although this posed an initial challenge for my employers, I was determined to learn the necessary skills and demonstrate my adaptability without hindering the company's progress. I quickly acquired proficiency in using Wordpress and tackled the tasks at hand with a problem-solving approach, delivering efficient and high-quality work that pleased my colleagues.</p>
                
            <h3 style={{marginBottom: "-30px", marginTop: "100px"}}>DiMe Projects</h3>
            <p>I feel extremely fortunate to have had the opportunity to utilize my skillset at DiMe. I was entrusted with various projects, including redesigning/developing or incorporating new features into project websites/pages.</p>
                
            <div className='case-boxes'>

                <div className='case-column'>
                    <Fade duration = {1000}><div className='case-box'>
                        <h3 style={{marginBottom: "-10px"}}>CancerX</h3>
                        <ul>
                            <li>Worked on the Development of webpage using Wordpress.</li>
                            <li>Project co-hosted by <a href='https://moffitt.org/' target='_blank'>Moffitt Cancer Center</a> and <a href='https://dimesociety.org/' target='_blank'>Digital Medicine Society (DiMe).</a></li>
                            <li>Announced by The White House.</li>
                        </ul>
                        <div className='button-casebox'>
                         <button onClick={this.cancerX}>Visit Webpage</button>
                        </div>
                    </div></Fade>
                    <Fade duration = {2000}><div className='case-box'>
                        <h3 style={{marginBottom: "-10px"}}>Presskit Page</h3>
                        <ul>
                            <li>Wireframed and Designed webpage with Miro.</li>
                            <li>Developed page using Wordpress, HTML, and CSS.</li>
                            <li>Collaborated with the team to ensure that the design and layout of the page were in line with our objectives.</li>
                        </ul>
                        <p style={{color: "#F178B6", textAlign: "center"}}>Project Details Coming Soon</p>
                    </div></Fade>
                    <Fade duration = {3000}><div className='case-box'>
                        <h3 style={{marginBottom: "-20px"}}>DataCC</h3>
                        <p>Improving the design and development of DiMe’s project Datacc</p>
                        <p style={{color: "#F178B6", textAlign: "left"}}>Project Details Coming Soon</p>
                    </div></Fade>
                
                </div>

                
                <div className='case-column'>
                <Fade duration = {1500}><div className='case-box'>
                        <h3 style={{marginBottom: "-10px"}}>Applied Digital Ethics</h3>
                        <ul>
                            <li>Designed & Developed Landing Page for User Advertisement using Wordpress and Miro.</li>
                            <li>Designed & Developed <a href='https://dimesociety.org/my-dashboard/' target='_blank'>User Dashboard.</a></li>
                            <li>Implemented WooCommerce to provide better user flow for course purchases.</li>
                        </ul>
                        <div className='button-casebox'>
                        <button onClick={this.projectPage}>View Project Page</button>
                        </div>
                    </div></Fade>
            
                    <Fade duration = {2500}><div className='case-box'>
                        <h3 style={{marginBottom: "-10px"}}>DiMe Glossary</h3>
                        <ul>
                            <li>Revamped the DiMe a Day platform to enable subscribers to access and browse the complete glossary.</li>
                            <li>Designed wireframes, structured layouts, and developed design components.</li>
                            <li>Engaged in multiple iterations to ensure that the team's vision aligned with a high-quality user experience.</li>
                        </ul>
                        <p style={{color: "#F178B6", textAlign: "center"}}>Project Details Coming Soon</p>
                        
                    </div></Fade>
                 
                </div>
 

                 </div>
            </div>
        );
    }
}
 
export default Dime;