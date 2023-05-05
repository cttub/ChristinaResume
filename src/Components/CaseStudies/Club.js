import React, { Component } from 'react';
import './case.css';
import Fade from 'react-reveal/Fade';
import CaseNav from './CaseNav';
import BacktoTop from '../BackToTop';
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
            <div className='case-main' id='club'>
                <BacktoTop/>
                  <CaseNav
                    senActive ="active"
                    />
                    <div className='heading'>
                        <div className='img-logo'></div>
                        <h3>Creating a company’s online presence to attract clients and future employees</h3>
                    </div>     

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




            </div>
        );
    }
}
 
export default Club;