import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
      <About />
    </div>
  );
}

export default App;
