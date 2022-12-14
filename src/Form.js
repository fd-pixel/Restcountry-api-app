import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

const Form = () => {
  const [countryList, setCountryList] = useState([]);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const url1 = "https://restcountries.com/v2/all";
  const url2 = `https://restcountries.com/v2/name/${input}`;
  const url3 = `https://restcountries.com/v2/region/${input2}`;

  const getAllCountries = async () => {
    const res = await axios.get(url1);
    console.log(res.data);
    setCountryList(res.data);
  };
  const getCountryByName = async (input) => {
    const res = await axios.get(url2);
    console.log(res.data);
    setCountryList(res.data);
  };
  const getCountryByRegion = async (input2) => {
    const res = await axios.get(url3);
    console.log(res.data);
    setCountryList(res.data);
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    //console.log({ region });
    getCountryByName(input);
  };
  const handleSearch2 = (e) => {
    e.preventDefault();
    //console.log({ region });

    getCountryByRegion(input2);
  };
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSearch} action="">
          <input
            className="input"
            type="text"
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            id="input"
            autoFocus
          />
          <button type="submit" class="btn btn-primary btn-sm">
            Search by Name
          </button>
        </form>
        <form onSubmit={handleSearch2} action="">
          <select
            className="input"
            onChange={(e) => setInput2(e.target.value.toLowerCase())}
          >
            <option value="all">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <button type="submit" class="btn btn-primary btn-sm">
            Filter By Continent
          </button>
        </form>
      </div>
      <div className="main">
        {countryList
          .filter((country) =>
            country.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
          )
          .map((country, index) => (
            <Country country={country} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Form;
