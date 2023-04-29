import React, { Component } from 'react';
import logo from '../Assets/fullLogo.png';
import {Link} from 'react-router-dom';
class NavComponents extends Component {
    state = {  } 
    render() { 
        return (
            <div className='navigation-component'>
          
                        <Link className='navigation-btn'
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/">  <img src={logo}/>
                        </Link>
            
             
                    <Link className='navigation-btn text-nav'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/MyWork"><h3>My Work</h3>
                    </Link>
               
            </div>
        );
    }
}
 
export default NavComponents;