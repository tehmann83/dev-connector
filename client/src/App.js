import React, { Fragment } from "react";
import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Landing from "../src/components/layout/Landing";

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
  </Fragment>
);

export default App;
