import React from "react"
import "./about.scss"
import AboutSection1 from "./aboutSection1/AboutSection1"
import AboutSection5 from "./aboutSection5/AboutSection5"
import AboutSection2 from "./aboutSection2/AboutSection2"
import AboutSection3 from "./aboutSection3/AboutSection3"
import AboutSection4 from "./aboutSection4/AboutSection4"
import AboutSection6 from "./aboutSection6/AboutSection6"
import AboutSection7 from "./aboutSection7/AboutSection7"
import AboutSection8 from "./aboutSection8/AboutSection8"
import AboutSection9 from "./aboutSection9/AboutSection9"
import Footer from "../../components/footer/Footer"

function About() {
  return (
    <div>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <AboutSection7 />
      <AboutSection8 />
      <AboutSection9 />
      <Footer bgColor="#fff" />
    </div>
  )
}

export default About
