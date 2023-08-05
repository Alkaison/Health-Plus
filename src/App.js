import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import About from "./Components/About";
import BookAppointment from "./Components/BookAppointment";
import Doctors from "./Components/Doctors";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Doctors />
    </div>
  );
}

export default App;
