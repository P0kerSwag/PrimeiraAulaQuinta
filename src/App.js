import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Youtube from './components/Youtube';
import Discord from './components/discord/discord';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/youtube" element={ <Youtube/> } />
        <Route path="/discord" element={ <Discord/>} />
      </Routes>
 

 </div>
  )
}

export default App;





