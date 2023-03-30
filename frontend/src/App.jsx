/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./App.css";
// import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  // axios
  //   .get(
  //     "https://api.nobelprize.org/2.1/laureates?_ga=2.80023191.1466721709.1679661688-1905291879.1679661688"
  //   )
  //   .then((response) => {});

  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
