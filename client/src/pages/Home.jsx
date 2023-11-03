import React from "react";
import "./home.css";
import Nav from "../components/Nav/Nav";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Nav />
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
