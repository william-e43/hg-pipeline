import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
//import {QualExpnc, DNQualExpnc, Q4Warning} from "./EndCases.jsx"

const Button = styled.button`
  height: 112.5px;
  width: 120px;
  border-radius: 12px;
  border: 12px;
  font-size: 16px;
  font-weight: 700;
  transition-property: box-shadow;
  transition-duration: 180ms;
  box-shadow: 0 2px 10px 0 #d4d7dc;
  margin: 20px;
  outline: none;
`

let Q1 =(props) => {
  /*this question needs a path to:
      •True case expnc
      •Q2    */
  //this is an example of the logic to choose where to route after the user submits their answers
  //the pathString is used in the later <Link> component
  const [a1, seta1] = useState(true);
  const [a2, seta2] = useState(false);

  let pathString = 'q2';
  if (a1) {
    pathString = 'qual-expnc';
  }

  const onYes = () => {
    seta1(true);
    seta2(false);
  }

  const onNo = () =>{
    seta1(false);
    seta2(true);
  }

  return(
    <div>
      <h1>Question 1</h1>
      <h2>Were you charged/ticketed as a minor for any of the following?</h2>
      {/* put the following buttons in a grid */}
      <Button onClick={() => onYes()}>Yes</Button>
      <Button onClick={() => onNo()}>No</Button><br></br>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>
      <div>Answer Yes: {a1.toString()}</div>
      <div>Answer No: {a2.toString()}</div>
    </div>
  )
}

let Q2 = (props) => {
  /*this question needs a path to:
    •True case expnc
    •False Case & beginning of Non Disclosure Pipeline    */
  const [a1, seta1] = useState(true);
  const [a2, seta2] = useState(false);

  let pathString = 'q3';
  if (a1) {
    pathString = 'qual-expnc';
  }

  const onYes = () => {
    seta1(true);
    seta2(false);
  }

  const onNo = () =>{
    seta1(false);
    seta2(true);
  }

  return(
    <div>
      <h1>Question 2</h1>
      <h2>Is it true that every charge arising from your arrest ended in one of the following ways?</h2>
      <ul>
        <li>Acquittal at trial or after appeal</li>
        <li>Pardoned</li>
        <li>Deferred adjudication on a Class C misdemeanor</li>
        <li>Completion of Pre-Trial diversion (where paperwork fine print does not prohibit an expunction)</li>
        <li>Completion of Veteran's Court program</li>
        <li>Case dismissed for terms</li>
        <li>Case rejected in the interests of justice</li>
      </ul>
      <Button onClick={() => onYes()}>Yes</Button>
      <Button onClick={() => onNo()}>No</Button><br></br>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>
      <div>Answer Yes: {a1.toString()}</div>
      <div>Answer No: {a2.toString()}</div>
    </div>
  )
}

//Start of Non Disclousre Pipeline

let Q3 = (props) => {
  /*this question needs a path to:
    •False case
    •Q4    */
  const [a1, seta1] = useState(true);
  const [a2, seta2] = useState(false);

  let pathString = 'q4';
  if (a1) {
    pathString = 'dnqual-expnc';
  }

  const onYes = () => {
    seta1(true);
    seta2(false);
  }

  const onNo = () =>{
    seta1(false);
    seta2(true);
  }

  return(
    <div>
      <h1>Question 3</h1>
      <h2>Did your charge require you to register as a sex offender, involve family violence, or was it one of the following : </h2>
      <ul>
        <li>Murder</li>
        <li>Stalking</li>
        <li>Trafficking</li>
        <li>Capital Murder</li>
        <li>Aggravated Kidnapping</li>
        <li>Continuous trafficking</li>
        <li>Injury to a child or elederly</li>
        <li>Abandonment of endangerment of a child</li>
        <li>Violation of a court or bond in cases involving family violence, child abuse or neglect, sexual assault, stalking, or trafficking</li>
        <li>Repeated violation of a court order or bond in cases involving family violence, child abuse or neglect, sexual assault, stalking or trafficking</li>
      </ul>
      <Button onClick={() => onYes()}>Yes</Button>
      <Button onClick={() => onNo()}>No</Button><br></br>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>
      <div>Answer Yes: {a1.toString()}</div>
      <div>Answer No: {a2.toString()}</div>
    </div>
  )
}

let Q4 = (props) => {
  /*this question needs a path to:
    •Q5 With warning
    •Q5    */
  const [a1, seta1] = useState(true);
  const [a2, seta2] = useState(false);

  let pathString = 'q5';
  if (a1) {
    pathString = 'q4-branch';
  }

  const onYes = () => {
    seta1(true);
    seta2(false);
  }

  const onNo = () =>{
    seta1(false);
    seta2(true);
  }

  return(
    <div>
      <h1>Question 4</h1>
      <h2>Did you receive another conviction or deferred adjudication at any time between your sentence and within five years of the completion of your sentence?</h2>
      <Button onClick={() => onYes()}>Yes</Button>
      <Button onClick={() => onNo()}>No</Button><br></br>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>
      <div>Answer Yes: {a1.toString()}</div>
      <div>Answer No: {a2.toString()}</div>
    </div>
  )
}

let Q5 = (props) => {
  /*this question needs a path to:
    •Red pipeline
    •Q6    */
  const [a1, seta1] = useState(true);
  const [a2, seta2] = useState(false);

  let pathString = 'q6';
  if (a1) {
    pathString = 'q5-branch';  //Go to red pipeline
  }

  const onYes = () => {
    seta1(true);
    seta2(false);
  }

  const onNo = () =>{
    seta1(false);
    seta2(true);
  }

  return(
    <div>
      <h1>Question 5</h1>
      <h2>Was you case disposed of with the successful completion of a deferred adjudication?</h2>
      <Button onClick={() => onYes()}>Yes</Button>
      <Button onClick={() => onNo()}>No</Button><br></br>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>
      <div>Answer Yes: {a1.toString()}</div>
      <div>Answer No: {a2.toString()}</div>
    </div>
  )
}

let Q6 = (props) => {
  /*this question needs a path to:
    •Blue pipeline
    •Q7    */
  const [a1, seta1] = useState(true);
  const [a2, seta2] = useState(false);

  let pathString = 'q7';
  if (a1) {
    pathString = 'q6-branch'; //Go to blue pipeline
  }

  const onYes = () => {
    seta1(true);
    seta2(false);
  }

  const onNo = () =>{
    seta1(false);
    seta2(true);
  }

  return(
    <div>
      <h1>Question 6</h1>
      <h2>Was your case disposed of with the successful completion of probation?</h2>
      <Button onClick={() => onYes()}>Yes</Button>
      <Button onClick={() => onNo()}>No</Button><br></br>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>
      <div>Answer Yes: {a1.toString()}</div>
      <div>Answer No: {a2.toString()}</div>
    </div>
  )
}


let Q7 = (props) => {
  /*this question needs a path to:
    •Green pipeline   */
  const [a1, seta1] = useState(true);
  const [a2, seta2] = useState(false);

  let pathString = 'dnqual-expnc';
  if (a1) {
    pathString = 'q7-branch'; //Go to green pipeline
  }

  const onYes = () => {
    seta1(true);
    seta2(false);
  }

  const onNo = () =>{
    seta1(false);
    seta2(true);
  }

  return(
    <div>
      <h1>Question 7</h1>
      <h2>Was your case disposed of by the completion of time in jail?</h2>
      <Button onClick={() => onYes()}>Yes</Button>
      <Button onClick={() => onNo()}>No</Button><br></br>
      <button><Link to={`/${pathString}`}>Submit Answer</Link></button>
      <div>Answer Yes: {a1.toString()}</div>
      <div>Answer No: {a2.toString()}</div>
    </div>
  )
}




export {Q1, Q2, Q3, Q4, Q5, Q6, Q7};