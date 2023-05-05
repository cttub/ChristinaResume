import React, { Component } from 'react';
import './case.css';
import {Link} from 'react-router-dom';
import DimeLogo from '../../Assets/Case/DimeLogo.png';
import SenLogo from '../../Assets/Case/NeonSensations.png';
import DinoLogo from '../../Assets/Case/DinoDoodsLogo.png';
function CaseNav(props){

  
        return (
            <div id = "case-navigation">
                
                <div className='container'>
                        <Link
                            onClick={() => {
                            document.querySelector("html").scrollTo(0, 0);
                            }}
                            to="/Dime">
                            <button id='case-nav-button' className={props.dimeActive}><img src = {DimeLogo}/></button>
                        </Link>
                        <Link
                            onClick={() => {
                            document.querySelector("html").scrollTo(0, 0);
                            }}
                            to="/Sensations">
                            <button id='case-nav-button' className={props.senActive}><img src = {SenLogo}/></button>
                        </Link>
                        <Link
                            onClick={() => {
                            document.querySelector("html").scrollTo(0, 0);
                            }}
                            to="/DinoDoods">
                            <button id='case-nav-button' className={props.dinoActive}><img src = {DinoLogo}/></button>
                        </Link>
                </div>
            </div>
        );
    
}
 
export default CaseNav;