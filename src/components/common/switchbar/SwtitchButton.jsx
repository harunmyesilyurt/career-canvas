import React, { useState } from "react";
import { Link } from "react-scroll";
import "./SwitchbarStyle.css";

function SwtitchButton({ path }) { 
  return (
    <li className="switchItem">
      <Link
        activeClass="active"
        to={path}
        spy={true}
        smooth={true}
        offset={0}
        duration={500} 
        className="ball" 
      >
      </Link>
    </li>
  );
}

export default SwtitchButton;
