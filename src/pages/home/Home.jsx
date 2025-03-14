import Education from "../education/Education";
import Experience from "../experiance/Experiance";
import Information from "../information/Information";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./HomeStyle.css";
import React from "react"; 

function Home() {
  return (
    <div className="home"> 
        <Information />  
        <Experience />
        <Education />
        <Skills />
        <Projects /> 
    </div>
  );
}

export default Home;