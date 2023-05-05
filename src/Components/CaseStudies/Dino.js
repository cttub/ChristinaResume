import React, { Component } from 'react';
import './case.css';
import Fade from 'react-reveal/Fade';
import CaseNav from './CaseNav';
import BacktoTop from '../BackToTop';
class Dino extends Component {
    state = {  } 
    handleClick = () => {
        window.open('https://drive.google.com/file/d/1Uag168lNxYg5i8bdbj-lYs4Ns_UpJz18/preview', '_blank');
      };
      phaseOne = () => {
        window.open('https://drive.google.com/file/d/1RNtc2F0qE2AqugZCEceCc_v7Fc3i_CAD/preview', '_blank');
      };
      phaseTwo = () => {
        window.open('https://drive.google.com/file/d/1BBLUWlnDSJVgkHPSXBM8S2hkZay-LmSk/preview', '_blank');
      };
      final = () => {
        window.open('https://drive.google.com/file/d/1IJA2FaUFyXzewC4-AuDn43pQXwt9CSxv/preview', '_blank');
      };
    render() { 
        return (
            <div className='case-main' id='dino'>
                <BacktoTop/>
            <CaseNav
                    dinoActive ="active"
                    />
                    <div className='heading' style={{marginBottom: "20px"}}>
                        <div className='img-logo'></div>
                        <h3>Rebranding and Developing an Optimized Web Application for Future Stakeholders</h3>
                    </div>   
                  

                    <h3 style={{marginBottom: "-30px"}}>Summary</h3>
                    <p>DinoDoods is an NFT company that exudes a playful and cute atmosphere in their collection. While working for the brand, I took on the responsibility of being the new website designer and developer, even though I lacked prior experience. In this case study, I detail the measures 
                    I took to enhance the previous design and development, as well as what I would do today to improve even further.</p>
                    <div className='skillsets'>
                        <div className='skills'><p>Figma</p></div>
                        <div className='skills'><p>React.js</p></div>
                        <div className='skills'><p>Canva</p></div>
                        <div className='skills'><p>Procreate</p></div>
                        <button onClick={this.handleClick} className='downloadPDF'>View PDF Version</button>
                   </div>

                   <h3 style={{textAlign: "center"}}>Phase One: Critiques of First Design / Development</h3>

                   <div className='phase-structure '>
                        <div className='info-boxes col-lg-6'>
                                <Fade duration = {1200}><div className='case-box'>  
                                    <h3>Structure</h3>
                                    <p style={{marginTop: "-30px"}}>The structure of the whole website is a bit chaotic and does not make sense from a UX stand point. Information seems just placed in a random order and not given a lot of thought when it comes to importance.</p>
                                </div></Fade>
                                <Fade duration = {1200}><div className='case-box'>  
                                    <h3>Color Pallete</h3>
                                    <p style={{marginTop: "-30px"}}>The color choices do not fit well with the overall theme and mood of the brand. While most of the artwork features pastel colors, the website incorporates a cool, darker shade of purple that doesn't convey the "fun" and "cute" vibes of the collection. Furthermore, the font choice for the website was not carefully considered to align with the branding.</p>
                                </div></Fade>
                                <Fade duration = {1200}><div className='case-box'>  
                                    <h3>Roadmap</h3>
                                    <p style={{marginTop: "-30px"}}>The Roadmap lacks an appealing structure for the user. The circles are PNGs that do not fully encapsulate the text across different devices. Additionally, there is too much white space within the entire design.</p>
                                </div></Fade>
                                <Fade duration = {1200}><div className='case-box'>  
                                    <h3>Components</h3>
                                    <p style={{marginTop: "-30px"}}>There was a lot of components within the website that was not hardcoded. For example: Showcase of the merch was simple an image pasted onto the site. This causes issues with the user experience across different devices, as it is not a responsive component and just makes the image smaller along with the text.</p>
                                </div></Fade>

                        </div>

                        <div className='col-lg-6 iframe-container'>
                            <iframe className='iframe-pdf' src="https://drive.google.com/file/d/1RNtc2F0qE2AqugZCEceCc_v7Fc3i_CAD/preview"></iframe>
                            <button onClick={this.phaseOne} className='seeFull'>See Full PDF</button>
                        </div>

                   </div>
                   <h3  style={{marginTop: "150px", textAlign: "center"}}>Phase Two: Taking Initiative on Improvement</h3>

                   <div className='phase-structure phaseTwo'>
                    <div className='col-lg-6 iframe-container'>
                                <iframe className='iframe-pdf' src="https://drive.google.com/file/d/1BBLUWlnDSJVgkHPSXBM8S2hkZay-LmSk/preview"></iframe>
                                <button onClick={this.phaseTwo} className='seeFull'>See Full PDF</button>
                            </div>
                            <div className='info-boxes col-lg-6'>
                                
                                    <Fade duration = {1200}><div className='case-box'>  
                                        <h3>Improving Color Pallette</h3>
                                        <p style={{marginTop: "-30px"}}>I have made a proper color palette and font theme for overall website. Also added more cute artwork for the audience to feel more of the “world” the Dino’s are apart of. (Having DinoDoodHQ on the homepage as a navigation around the site; Roadmap image visual)</p>
                                    </div></Fade>
                                    <Fade duration = {1200}><div className='case-box'>  
                                        <h3>Improved Structure</h3>
                                        <p style={{marginTop: "-30px"}}>Added more ore structure and thought to the website information to represent the importance in which the user views information.</p>
                                        <p><u>Hierarchy of Information</u></p>
                                        <p style={{marginTop: "-10px"}}>About > Mission > Roadmap >  Team > FAQ</p>
                                    </div></Fade>
                                    <Fade duration = {1200}><div className='case-box'>  
                                        <h3>Responsive Design</h3>
                                        <p style={{marginTop: "-30px"}}>Throughout the development process, I ensured that the design remains responsive across all devices by not incorporating any components with fixed width or height limitations.</p>
                                    </div></Fade>
                            </div>

                   </div>
                   <h3  style={{marginTop: "150px"}}>Phase Three:  Improvement based on Experience</h3>
                   <p style={{marginTop: "-30px"}}>Development for this project was almost two years ago, since then I have improved on my design and development work. Here is how I would redesign DinoDoods today.</p>

                   <Fade up duration = {1200}><div className='case-box phaseThree'>
                        <h3 style={{textAlign: "center"}}>Logo Redesign</h3>
                        <div className='logo-versions'>
                            <div className='old'></div>
                            <div className='new'></div>
                        </div>
                        <p>Starting off with the logo. Instead of hand drawing all the components, I decided to use simple shapes as well as a bubbly font “Val” to give a more professional look, while also providing the cuteness within the brand. The rebranded image was created from Canva.</p>

                   </div></Fade>
                   <Fade up duration = {1200}><div className='case-box phaseThree'>
                        <h3 style={{textAlign: "center"}}>Wireframe</h3>
                        <p>I felt as though the website before had too much artwork that steers away from the general information for the user. The homepage navigation can also be confusing to new users. So I decided to make things simpler in the refreshed design.</p>
                        <div className='phaseThree wireframe'>
                                <div className='wireframe-column col-lg-3'>
                                        <div className='homepage wireframe-box'></div>
                                </div>
                                <div className='wireframe-column col-lg-4'>
                                        <div className='mission wireframe-box'></div>
                                        <div className='about wireframe-box'></div>
                                </div>
                        </div>
                        <p>I broke up the website design into more pages, making sure the homepage had the most important information. (About, Roadmap, and FAQ) . This way users can dive straight into what we have to offer for them when investing into DinoDoods. The team and mission statement would be in different pages, for those more interested in the details of the company.</p>
                   </div></Fade>

                   <Fade up duration = {1200}><div className='case-box phaseThree finalDesign'>
                        <h3 style={{textAlign: "center"}}>Final Design</h3>
                        <div className='phase-structure'>

                                <div className='col-lg-6 iframe-container'>
                                            <iframe className='iframe-pdf' src="https://drive.google.com/file/d/1IJA2FaUFyXzewC4-AuDn43pQXwt9CSxv/preview"></iframe>
                                            <button onClick={this.final} className='seeFull'>See Full PDF</button>
                                        </div>
                                        <div className='info-boxes col-lg-6'>
                                            <div className='divide-text'>
                                                <p>I felt as though the website before had too much artwork that steers away from the general information for the user. The homepage navigation can also be confusing to new users. So I decided to make things simpler in the refreshed design.</p>
                                            </div>
                                            <div className='divide-text'>
                                                <p>Landing section (We are DinoDoodsHQ) is simple, straightforward, and also provides a preview of the main collection.</p>
                                            </div>
                                            <div className='divide-text'>
                                                <p>Now there is a better call to action with the “Mint Now” button within the navigation, providing difference in style which portrays difference in importance, having it stand out compared to “Mission” and “Team” hyper links.</p>
                                            </div>
                                            <div className='divide-text'>
                                                <p>Also have use of grouping by color, and containers to allow improvement of how the user would intake information. Example: Roadmap timeline interchanging colors. Team page being grouped in containers with: Name, Title, and Twitter Logo.</p>
                                            </div>
                                        
                            </div>

                   </div>
                   </div></Fade>
                  

                   <h3 style={{marginTop: "100px"}}>Conclusion</h3>
                   <p style={{marginTop: "-36px"}}>By taking the initiative to implement the rebranding and redevelopment of DinoDoods, I gained hands-on experience with React.js for the first time and was able to make improvements to web design and responsiveness. Overall, there was success in improving the structure, color palette, and mood of the webpage. With my current experience, I can further push the branding by providing a clean logo, organizing the informational structure, and creating a user-friendly experience that fits within the DinoDoods atmosphere.</p>
                
            </div>
        );
    }
}
 
export default Dino;