import { BrowserRouter , Routes, Route } from "react-router-dom";
import 'normalize.css';


import React, { useRef } from 'react';

import Header from "./components/Home/Components Header/Header";

import Footer from './components/Home/Components Header/Footer'
 
import Hero from "./components/Home/Components Header/Hero";

import Form from "./components/Register/form";

import UserProfile from './components/Profile/Editprofile';

import Profile from './components/Profile/Profile';

import Users from "./components/Admin/Users";
// import Login from "./components/User/Login/Login";

// import Company from './components/Admin/Company';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/userProfile" element={<UserProfile/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/user" element={<Users/>}/>
      {/* <Route path="/login" element={<Login/>}/> */}

      {/* <Route path="/company" element={<Company/>}/> */}


    

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