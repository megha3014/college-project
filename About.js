import React from "react";
import Cherry from "../assets/chery.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Cherry})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Sweet Affairs, where every bite tells a story! Our Story:
          Nestled in the heart of Bhilai, Sweet Affairs has been a cherished
          part of the community since 2018. What began as a humble dream of
          bringing joy through freshly baked goods has blossomed into a beloved
          local institution. At Sweet Affairs, we believe in the simple
          pleasures of life: the aroma of freshly baked bread wafting through
          the air, the warmth of a perfectly brewed cup of coffee, and the joy
          of sharing delicious treats with loved ones. Every day, our passionate
          bakers pour their hearts into crafting a delightful array of pastries,
          bread, cakes, and more, using only the finest ingredients and
          time-honored techniques.
        </p>
      </div>
    </div>
  );
}

export default About;
