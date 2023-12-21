// import React, { Component } from "react";
import React from "react";
import spinner from "./spinner.gif";

// export class Spinner extends Component {
const Spinner = () => {
  // render() { Class based
  return (
    <div className="text-center">
      <img className="my-3" src={spinner} alt="loading" />
    </div>
  );
  // }
};

export default Spinner;
