import React from 'react';
import {SubmitButton, StyledLink} from '../style';

/*
  This file holds all the components for the pipeline end cases (and some edge case scenarios)
  (i.e. when the user either qualifies or is disqualified one of these components is rendered)
*/

const QualExpnc = (props) => {

  return(
    <div>
      <h2>Congratulations you qualify for an expunction.</h2>
      <div id="qual-expnc-form"></div>
      <StyledLink to={props.location.state.from}><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
      <input type="file"></input>
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
      <h3>Your case involved driving or boating while intoxicated so you may be eligible for a non-disclosure so long as:</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>The case you are trying to get sealed is not on the “Big Naughty List”</li>
        <li>Your BAC was not listed in the deferred judgment as being above .15</li>
        <li>You were not involved in an accident that included another person in your car or otherwise</li>
        <li>Your wait period will be two years from the date of discharge</li>
      </ul><br></br>
      <StyledLink to="/q5-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q5Qual2 = (props) => {
  return(
    <div>
      <h2>Q5 Qual 2</h2>
      <h3>Your case was a misdemeanor and you were discharged after September 1, 2017 so you may be eligible for a non-disclosure so long as</h3>
      <ul>
        <li>The case you are trying to get sealed is not on the list of prohibited cases</li>
        <li>Your wait period will be 180 days after the date you were sentenced</li>
      </ul>
      <StyledLink to="/q5-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q5Qual3 = (props) => {
  return(
    <div>
      <h2>Q5 Qual 3</h2>
      <h3>Your case was a felony so you may be eligible for a non-disclosure so long as</h3>
      <ul>
        <li>The case you are trying to get sealed is not on “Big Naughty List”</li>
        <li>Your wait period will be
          <ul>
            <li>Five years from your discharge if the case was a felony</li>
            <li>Two years from your discharge if the case was covered by any offense labeled by the penal code as 20, 21, 22, 25, 42, 43, or 46</li>
            <li>Immediately if the above does not apply</li>
          </ul></li>
      </ul>
      <StyledLink to="/q5-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q6Qual1 = (props) => {
  return(
    <div>
      <h2>Q6 Qual 1</h2>
      <h3>Your case involved misdemeanor driving while intoxicated so you may be eligible for an expunction so long as</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>Your BAC was not listed in the deferred adjudication judgment as being above .15</li>
        <li>You were not involved in an accident that included another person in your car or otherwise</li>
        <li>Your wait period will be:
          <ul>
            <li>Two years from your discharge if you were required to have an ignition interlock in your car.</li>
            <li>Five years from your discharge if you were not required to have an interlock ignition device in your car</li>
          </ul>
        </li>
      </ul>
      <StyledLink to="/q6-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q6Qual2 = (props) => {
  return(
    <div>
      <h2>Q6 Qual 2</h2>
      <h3>Your case was a misdemeanor other than a DWI so you may be eligible for a non-disclosure so long as</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>The case you are trying to get sealed is not on the “Big Naughty List”</li>
        <li>Your wait period will be:
          <ul>
            <li>Two years from your discharge if the case was covered by any offense labeled by the penal code as 20, 21, 22, 25, 42, 43, or 46</li>
            <li>Immediately if the above does not apply</li>
          </ul>
        </li>
      </ul>
      <StyledLink to="/q6-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q6Qual3 = (props) => {
  return(
    <div>
      <h2>Q6 Qual 3</h2>
      <h3>You were a human trafficking victim so you may qualify for a non-disclosure so long as</h3>
      <ul>
        <li>Conviction set aside by judicial clemency</li>
        <li>Committed the offense solely as a victim of trafficking of persons</li>
        <li>Convicted under penal code 31.03/theft, 43.02/prostitution, 43.03/promotion of prostitution, health and safety code 481.120/delivery of marijuana, or 481.121/possession of marijuana</li>
      </ul>
      <StyledLink to="/q6-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q7Qual1 = (props) => {
  return(
    <div>
      <h2>Q7 Qual 1</h2>
      <h3>Your case involved misdemeanor driving while intoxicated so you may be eligible for a non-disclosure so long as</h3>
      <ul>

      </ul>
      <StyledLink to="/q7-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

const Q7Qual2 = (props) => {
  return(
    <div>
      <h2>Q7 Qual 2</h2>
      <StyledLink to="/q7-branch"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to="/"><SubmitButton>Home</SubmitButton></StyledLink>
    </div>
  )
}

export {QualExpnc, DNQualExpnc, DNQualND, Q5Qual1, Q5Qual2, Q5Qual3, Q6Qual1, Q6Qual2, Q6Qual3, Q7Qual1, Q7Qual2};