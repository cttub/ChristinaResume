import React, { useState, useEffect } from 'react';
import '../Style/work.css';
import dinoDoodsLogo from '../Assets/Case/DinoDoodsLogo.png';
import DimeLogo from '../Assets/Case/DimeLogo.png';
import SenLogo from '../Assets/Case/NeonSensations.png';
import Fade from 'react-reveal/Fade';
import Dropdown from './Dropdown';
import BackToTop from './BackToTop';
import {Link} from 'react-router-dom';

const caseStudies = [
  {
    name: 'DinoDoods NFT',
    title: 'Front-End Designer & Developer',
    description: 'DinoDoods presented me with a challenge to enhance my skills and strive for growth. Given my diverse set of responsibilities, I accomplished delivering a rebranded website that not only aligns with improved UX/UI experience but also enhances company branding.',
    logo: dinoDoodsLogo,
    link: '/DinoDoods',
    id: "dinodoods",
  },
  {
    name: 'Sensations Club',
    title: 'Web Developer & Designer',
    description: 'With my design and development, I have enhanced Sensation\'s overall online presence, providing diversity, increasing client traction, and facilitating booking implementation.',
    logo: SenLogo,
    link: '/Sensations',
    id: "sensations",
  },
  {
    name: 'Digital Medicine Society',
    title: 'Associate Front-end Developer',
    description: 'At DiMe, I utilize Wordpress, HTML, CSS, and Miro to provide high quality Front-End Developer work, as well as UX/UI design concepts and ideas.',
    logo: DimeLogo,
    link: '/DiMe',
    id: "dime",
  },
];

function MyWork() {

  const renderCaseCards = () => {
    return caseStudies.map((caseStudy, index) => (
      <Fade up>
        <div className='case-card' id={caseStudy.id} key={index}>
          <h3>{caseStudy.name}</h3>
          <p className='betm-subtitle'>{caseStudy.title}</p>
          <p>{caseStudy.description}</p>
          <img className='logo' src={caseStudy.logo} alt={caseStudy.name} />
          <Link className='case-button'
            onClick={() => {
              document.querySelector("html").scrollTo(0, 0);
            }}
            to={caseStudy.link}>
            <button>Read Case Study</button>
          </Link>
        </div>
      </Fade>
    ));
  };

  return (
    <div id='work'>
      <BackToTop />

      <div className='caseStudy'>
        <h1 style={{ textAlign: "center" }}>My Experience</h1>

        <div className='card-container'>
          {renderCaseCards()}
        </div>
      </div>

      <div className='project-overview'>
        <h1>Other Projects</h1>
    

                  <Dropdown
                    title="Broadview Seafood"
                    shortTitle="Broadview Seafood"
                    duration="Duration: 3 Days"
                    pdfUrl="https://drive.google.com/file/d/13nXE_8gwtk3ZYea3CViQEK1jOrZNMftS/preview"
                    description="This document discusses the design process of my freelance project, Broadview Seafood. 
                    You will see the moodboards, color palettes, and thought process behind the overall design."
                    webUrl = "https://www.broadviewseafood.net/"
                  />
                  <Dropdown
                    title="Refined Reach"
                    shortTitle = "Refined Reach"
                    pdfUrl="https://drive.google.com/file/d/1qaDfiYYZOhlRgpr_0gC5BSxy44FWNiRs/preview"
                    description = "Refined Reach is a startup Marketing Agency, that provides services to brand, and grow companies of various sizes. "
                    webUrl = "https://www.refinedreach.net/"
                  />
                   <Dropdown
                    title="Past Resume Designs"
                    shortTitle = "Previous Designs"
                    pdfUrl="https://drive.google.com/file/d/1mtbiIZ4y3HqlNWEIfC0-IT5D0anUPY9r/preview"
                    description = "Here are some of the previous iterations of my online resume."
                  />
                    <Dropdown
                    title="Extra Wireframes"
                    shortTitle = "Extra Wireframes"
                    pdfUrl="https://drive.google.com/file/d/1sjDl5H4njt0bfEgFhNAQW-GkIY6LGUbz/preview"
                    description = "Here are some extra wireframes and design work." 
                  />
            
                      
                </div>
            </div>

        );
    }

 
export default MyWork;