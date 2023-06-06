import React, { Component } from 'react';
import './case.css';
import Fade from 'react-reveal/Fade';
import CaseNav from './CaseNav';
import BacktoTop from '../BackToTop';
import Footer from '../Footer';
import landing from '../../Assets/Case/Sensations/NewLanding.png'
class Club extends Component {
    state = {  } 
    handleClick = () => {
        window.open('https://drive.google.com/file/d/1zcbT_vrJV9Go8c6upRwhSeOAdHTDLun2/preview', '_blank');
      };
      handleClickDesign = () => {
        window.open('https://drive.google.com/file/d/1pLh5MWL2aKrXW85XHNaNh_SCte2HRUM8/preview', '_blank');
      };
    render() { 
        return (
            <>
            <div className='case-main' id='club'>
                <BacktoTop/>
                  <CaseNav
                    senActive ="active"
                    />
                    <div className='heading'>
                        <div className='img-logo'></div>
                        <h3>Creating a company’s online presence to attract clients and future employees</h3>
                    </div>     
                    <div style={{display: "flex", justifyContent: "end", marginTop: "10px"}}><a href='https://sensationsgc.club/' target='_blank'><button>Visit Website Here</button></a></div>
                    <h3 style={{marginBottom: "-30px"}}>Disclaimer</h3>
                    <p>Please note that I was solely responsible for the design and development of the
                         website for Sensations. My involvement with the club was limited to the design and 
                         development of their website, and I do not endorse, promote or condone any activities or practices
                          associated with the adult entertainment industry.</p>
                    <p>I respect the personal beliefs and values of our audience, and understand that some may 
                        find the content displayed here uncomfortable or offensive. Viewer discretion is advised.</p>
                    <h3 style={{marginBottom: "-30px"}}>Summary</h3>
                    <p style={{marginBottom: "40px"}}>Taking charge with Sensations’ web presence overall increased the 
                        statistics of applicants and client attraction. This case study highlights the 
                        landing page optimizations made to enhance conversion rates and the impact of this domain on the company's overall growth. The study also examines the progression of the company's metrics before and after the implementation of the website overall.</p>
                    <div className='skillsets'>
                        <div className='skills'><p>Figma</p></div>
                        <div className='skills'><p>React.js</p></div>
                        <div className='skills'><p>Canva</p></div>
                        <div className='skills'><p>Procreate</p></div>
                        <div className='skills'><p>Formacade</p></div>
                        <button onClick={this.handleClickDesign} className='downloadPDF'>View Design PDF</button>
                        <button  onClick={this.handleClick} className='downloadPDF' style={{marginRight: "10px"}}>View PDF Version</button>
                   </div>

                   <h3 style={{textAlign: "center", marginTop: "100px"}}>Previous Landing Pages</h3>

                    <div className='landing-design'>
                        <div className='case-box design'>
                            <div>
                                <h3>Original Design</h3>
                                <p style={{marginTop: "-30px"}}>In the first design, the landing page had Sensations' promotional video in the background. Although it was a high-quality video, it did not fit best within the landing page, as it did not provide a clear call to action. Additionally, I lacked sufficient content to structure the site to its full potential.</p>
                            </div>
                       </div>
                       <Fade right duration = {1200}><div className='old-design'></div></Fade>
                    </div>
                    <div className='landing-design refreshed'>
                        <Fade left duration = {1200}><div className='new-design'></div></Fade>
                        <div className='case-box design'>
                            <div>
                            <h3>Refreshed Design</h3>
                            <p style={{marginTop: "-30px"}}>After obtaining more content for the website, I redesigned and developed the entire website. Although this landing page provided a simple, clean look, it did not result in a good amount of conversion rates.</p>
                            </div>
                       </div>
                    </div>

                    <h3  style={{textAlign: "center", marginTop: "100px"}}>Landing Page for SEO Optimization</h3>
                    <Fade duration = {1200}><img width={'100%'} src={landing}/></Fade>
                    <p>For the updated landing page, I provided more SEO terms to engage the audience with more information. This also provides a better search experience for Google to recommend the website to the intended audience. The call to action is also more prominent to the user, providing better conversion rates.</p>

                    <h3 style={{textAlign: "center", marginTop: "200px"}}>Analytics Report</h3>
                    <p style={{marginTop: "-30px"}}>This is the overall report that evaluates results aligned with the company’s goals. The resources used for this report are Google Domains, Google Analytics, and input from the hiring manager at Sensations.</p>

                    <div className='phase-structure'>
                            <Fade left duration = {1200}><div className='case-box modification anaytics'>
                                <h3 style={{textAlign: "center"}}>Design Modifications</h3>
                               <div className='table'>
                                    <div className='original-data data'>
                                            <p className='title'>Original Design</p>
                                            <p>Total Clicks</p>
                                            <p style={{marginTop: "-20px"}}>803</p>
                                            <hr></hr>
                                            <p>Total Impressions</p>
                                            <p style={{marginTop: "-20px"}}>4.11K</p>
                                            <p style={{fontSize: "20px"}}>(Nov. 10th 22) - (Dec. 31st 22)</p>
                                    </div>
                                    <div className='refreshed-data data'>
                                            <p className='title'>Refreshed Design</p>
                                            <p>Total Clicks</p>
                                            <p style={{marginTop: "-20px"}}>2.18K</p>
                                            <hr></hr>
                                            <p>Total Impressions</p>
                                            <p style={{marginTop: "-20px"}}>11.4K</p>
                                            <p  style={{fontSize: "20px"}}>(Jan. 1st 23) - (Apr. 25th 23)</p>

                                    </div>
                                    
                               </div>
                               <p style={{textAlign: "center"}}>Google Analytics was implemented shortly after the refreshed design, improving total impressions.</p>
                            </div></Fade>
                            <Fade right duration = {1200}><div className='case-box applicants anaytics'>
                                <h3 style={{textAlign: "center"}}>Applicants</h3>
                               <div className='table'>
                                    <div className='original-data data'>
                                            <p className='title'>Before Webpage</p>
                                            <p>Avg. 7</p>
                                            <p style={{marginTop: "-20px"}}>applicants</p>
                                            <p style={{marginTop: "-20px"}}>per month</p>
                                    </div>
                                    <div className='refreshed-data data'>
                                            <p className='title'>After Webpage</p>
                                            <p>Avg. 12+</p>
                                            <p style={{marginTop: "-20px"}}>applicants</p>
                                            <p style={{marginTop: "-20px"}}>per month</p>

                                    </div>
                                    
                               </div>
                               <p style={{textAlign: "center"}}>91+ online applicants within the last 7 months</p>
                               <p style={{marginTop: "100px"}}>
                                Expanding the company's options for employees is crucial in increasing the chances of hiring individuals with strong work ethics. Offering an online application process excels in identifying the right candidates for the job.</p>
                            </div></Fade>
                    </div>
                <h3 style={{marginTop: "100px"}}>Conclusion</h3>
                <p style={{marginTop: "-20px"}}>In conclusion, the website optimizations made to Sensations have had a positive impact on the company's growth. The previous landing pages lacked a clear call to action, resulting in low conversion rates. However, the updated landing page contains more SEO terms and a prominent call to action, resulting in improved conversion rates and attracting more applicants. The statistics provided by Google Domains and Analytics show a significant increase in total clicks and impressions after the refreshed design leading to a higher number of applicants per month.</p>

              
            
            </div>
            <Footer/>
            </>
        );
    }
}
 
export default Club;