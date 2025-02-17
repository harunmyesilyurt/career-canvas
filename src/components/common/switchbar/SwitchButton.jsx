import React from "react";
import { Link } from "react-scroll";

function SwitchButton({ path, label }) {
  return (
    <li className="switchItem">
      <Link
        to={path}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="ball no-copy"
        activeClass="active"
      >
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
}

export default SwitchButton; 