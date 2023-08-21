import React from "react";
import "./about.scss";
import { pngs } from "../../constants/images";

function About() {
  return (
    <div>
      About
      <img src={pngs.bgSmall} alt="" />
    </div>
  );
}

export default About;
