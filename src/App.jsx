import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import './App.css';
import Footer from "./Footer.jsx";
import './server.js'
import Vans from "./Pages/Vans.jsx";

function App() {
  return (
    <div>
    <BrowserRouter>
     <header>
        <Link to='/' className="homeLogo">#Vanlife</Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
     </header>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/vans' element={<Vans/>}/>

  </Routes>
   <Footer/>
    </BrowserRouter>
    </div>
  )
}
export default App;


