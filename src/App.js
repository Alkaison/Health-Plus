import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
    </div>
  );
}

export default App;
