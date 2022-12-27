import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/home/Home";
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
        <Proyects />
      </Route>
    </>
  );
}

export default App;
