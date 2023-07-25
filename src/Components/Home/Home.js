import React from "react";
import "./Home.css";
import HomeCard from "./HomeCard.js";

const Home = () => {
  return (
    <div className="home">
      <div className="list__container">
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
