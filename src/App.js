import logo from './logo.svg';
import './App.css';
import './media.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MyWork from './Components/MyWork';
import Homepage from  './Components/Homepage';
function App() {
  return (
    <HashRouter>
      <Routes>
     
          <Route index element={<Homepage/>} />
  
          <Route path="MyWork" element={<MyWork/>} />
   
  
      </Routes>
    </HashRouter>
  );
}

export default App;
