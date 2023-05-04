import logo from './logo.svg';
import './App.css';
import './media.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MyWork from './Components/MyWork';
import Homepage from  './Components/Homepage';
import Navigation from './Components/Navigation';

import Club from './Components/CaseStudies/Club';
import Dime from './Components/CaseStudies/Dime';
import Dino from './Components/CaseStudies/Dino';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Navigation/>}>
          <Route index element={<Homepage/>} />
  
          <Route path="MyWork" element={<MyWork/>} />
          <Route path="Sensations" element={<Club/>} />
          <Route path="DiMe" element={<Dime/>} />
          <Route path="DinoDoods" element={<Dino/>} />
          
   
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
