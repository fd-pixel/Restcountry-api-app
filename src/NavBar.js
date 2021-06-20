import React from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navleft">
          <Link to="/">Home</Link>
        </div>
        <ul>
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link
              to={{ pathname: "https://github.com/fd-pixel" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </Link>
          </li>
          {/* <li>
            <Link to="/details">Detxcvxvails</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
