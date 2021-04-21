import React from 'react';
import {Link} from "react-router-dom";
/*
  This file holds all the components for the pipeline end cases (and some edge case scenarios)
  (i.e. when the user either qualifies or is disqualified one of these components is rendered)
*/

let QualExpnc = (props) => {
  return(
    <div>
      <h2>QualForExpnc</h2>
      <button> <Link to="/">Return to Home</Link> </button>
    </div>
  )
}

let DNQualExpnc = (props) => {
  return (
    <div>
      <h2>DNQualForExpnc</h2>
      <button> <Link to="/">Return to Home</Link> </button>
    </div>
  )
}









export {QualExpnc, DNQualExpnc};