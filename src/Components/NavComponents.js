import React, { Component } from 'react';
import logo from '../Assets/fullLogo.png';
import smallLogo from '../Assets/fullLogo.svg';
import {Link} from 'react-router-dom';
class NavComponents extends Component {
    state = {  } 
    render() { 
        return (
            <div className='navigation-component'>
          
                        <Link className='navigation-btn logo'
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/">  <img className='logo-main' src={logo}/><img className='smallLogo' src={smallLogo}/>
                        </Link>
            
             
                    <Link className='navigation-btn text-nav'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/MyWork"><h2>My Work</h2>
                    </Link>
               
            </div>
        );
    }
}
 
export default NavComponents;