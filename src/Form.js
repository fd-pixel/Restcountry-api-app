import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

const Form = () => {
  const [countryList, setCountryList] = useState([]);
  const [region, setRegion] = useState("");

  const url = `https://restcountries.eu/rest/v2/${region}`;
  const getData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setCountryList(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    //console.log({ region });
    getData();
  };
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSearch} action="">
          <input
            type="text"
            onChange={(e) =>
              setRegion("region/" + e.target.value.toLowerCase())
            }
            id="input"
          />
          <button type="submit" class="btn btn-primary btn-sm">
            Search
          </button>
        </form>
      </div>
      <div className="main">
        {countryList.map((country, index) => (
          <Country country={country} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Form;
