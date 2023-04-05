/* eslint-disable import/no-unresolved */
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import History from "../../components/History/History";
import Medals from "../../components/Medals/Medals";

function HomePage() {
  return (
    <>
      <HeroSection />
      <History />
      <Medals />
    </>
  );
}

export default HomePage;
