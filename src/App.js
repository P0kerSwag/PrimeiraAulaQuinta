import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Youtube from './components/Youtube';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/youtube" element={ <Youtube/> } />
      </Routes>
 

 </div>
  )
}

export default App;





