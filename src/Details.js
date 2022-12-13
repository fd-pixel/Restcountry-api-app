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
        <div className="detail-name">{res?.name}</div>
        <div className="flag">
          <img src={res?.flags?.png} alt="fgh" />
        </div>
        <div className="info-box">
          <div className="continent ">
            <span style={{ fontWeight: "bold" }}>Continent :</span>{" "}
            {res?.region}
          </div>
          <div className="capital">
            <span style={{ fontWeight: "bold" }}>Capital :</span> {res?.capital}
          </div>
          <div className="currency">
            <span style={{ fontWeight: "bold" }}>Currency :</span>{" "}
            {res?.currencies.map((item) => item.name)}
          </div>
          <div className="population">
            <span style={{ fontWeight: "bold" }}>Population : </span>
            {res?.population}
          </div>
        </div>

        <div className="borders">
          {res?.name?.common} has {res?.borders?.length} neighboring countries{" "}
          {}{" "}
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
