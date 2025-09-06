import React from "react";
import Navbar from "../component/layout/Navbar";
import HeroUp from "../component/HeroUp";
import AboutMe from "../component/AboutMe";
import MyRecentWorks from "../component/MyRecentWorks";
import GoOnAProject from "../component/GoOnAProject";
import Footer from "../component/Footer"
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroUp />
      <AboutMe />
      <MyRecentWorks />
      <GoOnAProject />
      <Footer /> 
    </div>
  );
};

export default HomePage;
