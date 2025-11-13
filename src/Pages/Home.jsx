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
      <Suspense>
        <LatestBooks latestBooks={latestBooks}></LatestBooks>
      </Suspense>
      <About></About>
    </div>
  );
};

export default Home;
