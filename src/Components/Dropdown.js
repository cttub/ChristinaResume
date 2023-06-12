import React, { useState } from 'react';

function Dropdown(props) {
  const [isOpen, setIsOpen] =  useState(false); //Function setIsOpen and variable isOpen = false

 //Function that changes the value of IsOpen. Toggling the boolean value.
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleClick() {
    window.open(props.webUrl, "_blank");
  }

  return (
    <div className="Dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}> 
        <div className='title'>{props.title}</div>
        <div className='arrows'>
        {isOpen ? '\u25B2' : '\u25BC'}
        </div>
      </button>
      {/* If isOpen is true then add open to the class name if false then leave "" or blank*/}
      <div className={`information ${isOpen ? "open" : ""}`}> 
       
            <div className="pdf col-lg-12 block">
                <iframe src={props.pdfUrl}  width='100%' height="800"></iframe>
            </div>

            <div className='dropdown-info block'>
                    <h3 style={{marginBottom: "-40px"}}>{props.shortTitle}</h3>
                    <p>{props.duration}</p>
                    <p>{props.description}</p>
                <div className='dropdown-link'>
                {props.webUrl && <button onClick={handleClick}>Visit Webpage</button>}
                <a href={props.pdfUrl} target="_blank">View full PDF</a>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Dropdown;
