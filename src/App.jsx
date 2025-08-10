import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Services from './Page/Services';
import Demo from './Page/Demo';
import Features from './Page/Features';
import Auth from './Component/Auth';
// import Firbase from './Component/Firbase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/features' element={<Features />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
{/* <Firbase/> */}

export default App;
