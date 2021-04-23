import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
/*
  This file holds all the components for the pipeline end cases (and some edge case scenarios)
  (i.e. when the user either qualifies or is disqualified one of these components is rendered)
*/

const SubmitButton = styled.button`
  height: 37.5px;
  width: 73.5px;
  background: white;
  border-radius: 12px;
  border: 12px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 2px 10px 0 #d4d7dc;
  margin: 20px;
  outline: none;
`
const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`

const QualExpnc = (props) => {
  return(
    <div>
      <h2>Congratulations you qualify for an expunction.</h2>
      <StyledLink to={props.location.state.from}><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const DNQualExpnc = (props) => {
  return (
    <div>
      <h2>You do not qualify for an expunction.</h2>
      <StyledLink to={props.location.state.from}><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const DNQualND = (props) => {
  return (
    <div>
      <h2>You do not qualify for an expunction or non-disclosure</h2>
      <StyledLink to={props.location.state.from}><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q5Qual1 = (props) => {
  return(
    <div>
      <h2>Q5 Qual 1</h2>
    </div>
  )
}

const Q5Qual2 = (props) => {
  return(
    <div>
      <h2>Q5 Qual 2</h2>
    </div>
  )
}

const Q5Qual3 = (props) => {
  return(
    <div>
      <h2>Q5 Qual 3</h2>
    </div>
  )
}

const Q6Qual1 = (props) => {
  return(
    <div>
      <h2>Q6 Qual 1</h2>
    </div>
  )
}

const Q6Qual2 = (props) => {
  return(
    <div>
      <h2>Q6 Qual 2</h2>
    </div>
  )
}

const Q6Qual3 = (props) => {
  return(
    <div>
      <h2>Q6 Qual 3</h2>
    </div>
  )
}

export {QualExpnc, DNQualExpnc, DNQualND, Q5Qual1, Q5Qual2, Q5Qual3, Q6Qual1, Q6Qual2, Q6Qual3};