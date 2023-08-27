import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Main from "./screens/Main";
import Services from "./screens/Services";
import Products from "./screens/Products";
import SignUp from "./screens/SignUp";
function App()
 {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact Component={Main} />
        <Route path="/Services" Component={Services}/> 
        <Route path="/Products" Component={Products}/> 
        <Route path="/Sign-up" Component={SignUp}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
