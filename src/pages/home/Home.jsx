import Education from "../education/Education";
import Experience from "../experiance/Experiance";
import Information from "../information/Information";
import Projects from "../projects/Projects";
import "./HomeStyle.css";
import React from "react"; 
 
function Home() {
  return (
    <div className="home"> 
        <Information />  
        <Experience />  
        <Education />  
        <Projects /> 
    </div>
  );
}

export default Home;