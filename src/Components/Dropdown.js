import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

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
      <Fade duration = {300}><div className={`information ${isOpen ? "open" : ""}`}>
       
            <div className="pdf col-lg-10 block">
                <iframe src={props.pdfUrl}  width='100%' height="800"></iframe>
            </div>

            <div className='dropdown-info block'>
                    <h3>{props.shortTitle}</h3>
                    <p>{props.duration}</p>
                    <p>{props.description}</p>
                <div className='dropdown-link'>
                {props.webUrl && <button onClick={handleClick}>Visit Webpage</button>}
                <a href={props.pdfUrl} target="_blank">View full PDF</a>
                </div>
            </div>
      </div></Fade>
    </div>
  );
}

export default Dropdown;
