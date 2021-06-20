import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   useParams,
// } from "react-router-dom";

import { useHistory } from "react-router-dom";

const Country = ({ country }) => {
  const handleClick = () => {
    console.log("object");
    history.push({
      pathname: "/details",
      country: country,
    });
  };

  const history = useHistory();

  return (
    <div>
      <div className="box">
        <div className="name">{country?.name}</div>
        <div className="flag">
          <img
            src={country?.flag}
            alt="fgh"
            onClick={handleClick}
            cursor="pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Country;
