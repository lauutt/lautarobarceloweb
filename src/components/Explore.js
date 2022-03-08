import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Text, LanguageContext } from '../containers/Language';
import Bio from './pages/bio'
import Discography from './pages/discography'
import Press from './pages/press'
import Home from './pages/home'
import Workshops  from './pages/workshops'
import Contact from './pages/contact'
import News from './pages/news'



export default function Explore() {

  
return (
  
  <Routes>
    <Route path="/discography" element={<Discography/>} />  
    <Route path="/press" element={<Press/>} />
    <Route path="/contact" element={<Contact/>} /> 
    <Route path="/workshops" element={<Workshops/>} /> 
    <Route path="/bio" element={<Bio/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/news" element={<News/>} />
    <Route path="/" element={<Navigate replace to="/home" />} />
  </Routes> 
  
)





}