import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Dnq from "./Dnq.jsx";

let Q1 =(props) => {
  let testResult = true;
  let pathString = 'dnq';
  if (testResult) {
    pathString = "q2"
  }
  return(
    <div>
      <div>Question One goes here</div>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>

    </div>
  )
}

let Q2 = (props) => {
  return(
    <div>Q2 goeshere!!</div>
  )
}



export {Q1, Q2};