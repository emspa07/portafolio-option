import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./index.elements";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Portafolio } from "./pages/Portafolio";
import { Contacto } from "./pages/Contacto";

function App () {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portafolio" element={<Portafolio/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
