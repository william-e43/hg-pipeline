import React from "react";
import {Switch, Route} from "react-router-dom";
import Q2 from "./Q2.jsx";

function  Q1(props) {
  return(
    <div>
      <div>Question One goes here</div>
      <Switch>
        <Route path="Q2"> <Q2 /> </Route>
      </Switch>
    </div>
  )
}

export default Q1;