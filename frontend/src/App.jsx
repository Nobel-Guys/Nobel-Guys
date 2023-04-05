/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import NotableWinners from "./components/NotableWinners/NotableWinners";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/notable-winners" element={<NotableWinners />} />
        <Route path="/categories/:type" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
