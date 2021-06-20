import React from "react";
import { useState } from "react";
import Country from "./Country";

const Details = (props) => {
  console.log("props", props);
  const res = props.location.country;

  return (
    <div class="detail-main">
      <div className="box-detail">
        <div className="detail-name">{res?.name}</div>
        <div className="flag">
          <img src={res?.flag} alt="fgh" />
        </div>
        <div className="continent">Continent : {res?.region}</div>
        <div className="capital">Capital : {res?.capital}</div>
        <div className="currency">Currency : {res?.currencies[0].name}</div>
        <div className="population">Population :{res?.population}</div>
        <div className="borders">
          {res?.name} has {res?.borders.length} neighboring countries {}{" "}
          {res?.borders?.map((border, index) => {
            console.log(border);
            return <p style={{ color: "black" }}>{border}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
