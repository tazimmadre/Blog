import React from "react";
import "./styles.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin"  element={<Signin />} />
        <Route path="/signup"  element={<Signup />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App