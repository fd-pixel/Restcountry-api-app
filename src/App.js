import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import NavBar from "./NavBar";
import Details from "./Details";
import About from "./about";
import Form from "./Form";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
// import Detail from "../../../recipe/src/components/details/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <h2> "Click the Flag to see details of the Country"</h2> */}
        <Switch>
          <Route exact path="/" component={Form} />

          <Route path="/details" component={Details} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
