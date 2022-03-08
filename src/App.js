import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { LanguageProvider } from './containers/Language';
import LanguageSelector from './components/LanguageSelector';
import Explore from './components/Explore';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
    <LanguageProvider>
    <Navbar/>
    <Explore/>
    <Footer/>
    </LanguageProvider>
    </div>
  );
}

export default App;