import React from "react";
import Banner from "../Components/HomeComponents/Banner";
import TopGenres from "../Components/HomeComponents/TopGenres";
import About from "../Components/HomeComponents/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopGenres></TopGenres>
      <About></About>
    </div>
  );
};

export default Home;
