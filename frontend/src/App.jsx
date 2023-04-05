/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./App.css";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import NotableWinners from "./components/NotableWinners/NotableWinners";
import Chemistry from "./components/Chemistry/Chemistry";

function App() {
  // axios
  //   .get(
  //     "https://api.nobelprize.org/2.1/laureates?_ga=2.80023191.1466721709.1679661688-1905291879.1679661688"
  //   )
  //   .then((response) => {});

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/notable-winners" element={<NotableWinners />} />
        <Route path="/categories" element={<Chemistry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
