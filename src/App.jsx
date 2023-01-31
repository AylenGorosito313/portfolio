import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Viewproyects from "./pages/View/Viewproyects";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
// import Contact from "./pages/Contacto/Contact";
import Nav from "./components/Nav-bar/Nav";
import { Route } from "react-router-dom";
import Proyects from "./pages/proyects/Proyects";
function App() {
 

  return (
    <>
      <Route path="/" >
        <Nav />
      </Route>
 
      <Route exact path="/">
        <Home />
      </Route>
   
      <Route path="/proyects" >
        <Viewproyects />
        <Footer/>
      </Route>
      {/* <Route path="/contact" >
        <Contact/>
      </Route> */}
    </>
  );
}

export default App;
