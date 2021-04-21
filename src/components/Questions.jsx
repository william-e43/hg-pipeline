import React from "react";
import {Link} from "react-router-dom";
import {QualExpnc, DNQualExpnc, Q4Warning} from "./EndCases.jsx"


let Q1 =(props) => {
  /*this question needs a path to:
      •True case
      •Q2    */
  //this is an example of the logic to choose where to route after the user submits their answers
  //the pathString is used in the later <Link> component
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
  /*this question needs a path to:
    •True case
    •False Case & beginning of Non Disclosure Pipeline    */
  return(
    <div>Q2 goeshere!!</div>
  )
}

//Start of Non Disclousre Pipeline

let Q3 = (props) => {
  /*this question needs a path to:
    •False case
    •Q4    */
return(
  <div>Q3 goeshere!!</div>
)
}

let Q4 = (props) => {
  /*this question needs a path to:
    •Q5 With warning
    •Q5    */
return(
  <div>Q4 goeshere!!</div>
)
}

let Q5 = (props) => {
  /*this question needs a path to:
    •Red pipeline
    •Q6    */
return(
  <div>Q5 goeshere!!</div>
)
}

let Q6 = (props) => {
  /*this question needs a path to:
    •Blue pipeline
    •Q7    */
return(
  <div>Q6 goeshere!!</div>
)
}


let Q7 = (props) => {
  /*this question needs a path to:
    •Green pipeline   */
return(
  <div>Q7 goeshere!!</div>
)
}




export {Q1, Q2, Q3, Q4, Q5, Q6, Q7};