import React from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navleft btn btn-primary">
          <Link to="/">HOME</Link>
        </div>
        <div className="navcenter">Welcome to the World of the Countries</div>
        <ul>
          <li>
            <Link to="/about" className="btn btn-primary about">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "https://github.com/fd-pixel" }}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
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
