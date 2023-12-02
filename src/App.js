import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useRef } from 'react';

import Header from "./components/Home/Components Header/Header";

import Footer from './components/Home/Components Header/Footer'
 
import Hero from "./components/Home/Components Header/Hero";

import Form from "./components/Register/form";




export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/form" element={<Form/>}/>


    

    </Routes>
      {/* <Route path="/" index element={} />
      <Routes>
        
        <Route path="/Home/components/Header/Header" element={<Header />} />
         
        <Route path="/User/UserUpdate/Exercises" element={<Exercises  />} />
        <Route path="/Admin" element={<Start />} />
      


      </Routes> */}
      <Footer/>
    </BrowserRouter>
  );
}