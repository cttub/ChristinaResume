import logo from './logo.svg';
import './App.css';
import './media.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MyWork from './Components/MyWork';
import Homepage from  './Components/Homepage';
import Navigation from './Components/Navigation';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Navigation/>}>
          <Route index element={<Homepage/>} />
  
          <Route path="MyWork" element={<MyWork/>} />
   
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
