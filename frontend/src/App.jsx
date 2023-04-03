/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./App.css";
// import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import History from "./components/History/History";
import Medals from "./components/Medals/Medals";
import Footer from "./components/Footer/Footer";

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
      <History />
      <Medals />
      <Footer />
    </div>
  );
}

export default App;
