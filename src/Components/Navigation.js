import React from 'react';
import { Outlet } from "react-router-dom";
import NavComponents from './NavComponents';
const Navigation = () => {
  return(
    <div id='nav'>
      <NavComponents/>
      <Outlet />
    </div>
  );
};

export default Navigation;