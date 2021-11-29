import React from "react";
import { useState } from "react";
import Country from "./Country";
import { useHistory } from "react-router-dom";

const Details = (props) => {
  console.log("props", props);
  const res = props?.location?.country;
  const history = useHistory();
  const handleBack = () => {
    console.log("object");
    history.push("/");
  };

  return (
    <div class="detail-main">
      <div className="box-detail">
        <div className="detail-name">{res?.name?.common}</div>
        <div className="flag">
          <img src={res?.flags?.png} alt="fgh" />
        </div>
        <div class="info-box">
          <div className="continent ">Continent : {res?.region}</div>
          <div className="capital">Capital : {res?.capital[0]}</div>
          <div className="currency">Currency : {res?.currencies?.symbol}</div>
          <div className="population">Population :{res?.population}</div>
        </div>

        <div className="borders">
          {res?.name} has {res?.borders?.length} neighboring countries {}{" "}
          {res?.borders?.map((border, index) => {
            console.log(border);
            return (
              <p style={{ color: "yellow" }}>
                {index + 1}-{border}
              </p>
            );
          })}
        </div>
        <div className="btn btn-warning btn-sm" onClick={handleBack}>
          Back
        </div>
      </div>
    </div>
  );
};

export default Details;
