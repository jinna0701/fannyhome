"use client";
import React from 'react';
import Landing from './Landing';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Header from './Component/Header'
import Location from './Location';
import Program from './Program';
import Contact from './Contact';
import About from './About';
import Question from './Question';
import Login from './Login';
import Signup from './Signup';
import Footer from './Component/Footer';
import Admin from './Admin';




 
export default function Home() {

  
  return (
    
    <BrowserRouter>
  <Header>
     
  <Routes>
     
    <Route path="/Landing" element={<Landing/>}/>   
    <Route path="/Location" element={<Location/>}/> 
    <Route path="/Program" element={<Program/>}/> 
    <Route path="/Contact" element={<Contact/>}/> 
    <Route path="/About" element={<About/>}/> 
    <Route path="/F&Q" element={<Question/>}/> 
    <Route path="/Login" element={<Login/>}/> 
    <Route path="/Signup" element={<Signup/>}/> 
    <Route path="/Admin" element={<Admin/>}/>
    

  </Routes>
  </Header>
   
  <Footer/>
 
  </BrowserRouter>
  
)
 
}





 

















//install tailwindcss
//npm install react-router-dom
//npm install -D tailwindcss
//npx tailwindcss init
//npm install lucide-react





