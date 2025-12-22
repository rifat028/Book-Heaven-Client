import React, { Suspense } from "react";
import Banner from "../Components/HomeComponents/Banner";
import TopGenres from "../Components/HomeComponents/TopGenres";
import About from "../Components/HomeComponents/About";
import LatestBooks from "../Components/HomeComponents/LatestBooks";
import { useLoaderData } from "react-router";

const Home = () => {
  const latestBooks = useLoaderData();
  // console.log(latestBooks);
  return (
    <div>
      <Banner></Banner>
      <TopGenres></TopGenres>
      <LatestBooks latestBooks={latestBooks}></LatestBooks>
      <About></About>
    </div>
  );
};

export default Home;
