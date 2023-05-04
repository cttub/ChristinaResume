import React, { useState } from 'react';

import arrow from '../Assets/arrow.svg';
const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // This function will scroll the page to the top
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // This function will show or hide the button based on the scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      {showButton && (
        <button className="back-to-top" onClick={handleBackToTop}>
         <img src = {arrow}/>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
