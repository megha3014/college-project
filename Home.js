import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/butter.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> SWEET AFFAIR</h1>
        <p> Cake that fits with every mood.</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
