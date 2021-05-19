import React from 'react';
import {YNQuestion} from './ButtonTemplates.jsx';

let Q1 =(props) => {

  return(
    <div>
      <h1>Were you charged/ticketed as a minor for any of the following?</h1>
      <ul>
        <li>One or more convictions for possession, purchase, consumption, or receipt of cigarettes or tobacco products.</li><br></br>
        <li>No more than one conviction of:
          <ul>
            <li>Purchase or attempt to purchase alcohol by a minor</li>
            <li>Possession of alcohol by a minor</li>
            <li>Consumption of alcohol by a minor</li>
            <li>Misrepresentation of age</li>
            <li>Driving or operating a watercraft under the influence of alcohol</li>
          </ul>
        </li><br></br>
        <li>No more than one conviction of:
          <ul>
          <li>Any fine-only misdemeanor (other than traffic) not covered by one of the above</li>
          <li>Violations of a penal ordinance of a political subdivision</li>
          </ul>
        </li><br></br>
        <li>Or, was your case dismissed through:
          <ul>
          <li>Teen Court</li>
          <li>Class C misdemeanor ending in successful completion of deferred adjudication</li>
          </ul>
        </li>
      </ul>
    <YNQuestion yPath="qual-expnc" nPath="/q2" currentPath="/q1" backPath="/home"/>
    </div>
  )
}

let Q2 = (props) => {

  return(
    <div>
      <h1>Is it true that every charge arising from your arrest ended in one of the following ways?</h1>
      <ul>
        <li>Acquittal at trial or after appeal</li>
        <li>Pardoned</li>
        <li>Deferred adjudication on a Class C misdemeanor</li>
        <li>Completion of Pre-Trial diversion (where paperwork fine print does not prohibit an expunction)</li>
        <li>Completion of Veteran's Court program</li>
        <li>Case dismissed for terms</li>
        <li>Case rejected in the interests of justice</li>
      </ul>
      <YNQuestion yPath="qual-expnc" nPath="/q2-branch" currentPath="/q2" backPath="/q1"/>
    </div>
  )
}
//Start of Non Disclousre Pipeline

let Q3 = (props) => {

  return(
    <div>
      <h1>Did your charge require you to register as a sex offender, involve family violence, or was it one of the following :</h1>
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
      <YNQuestion yPath="dnqual-nd" nPath="/q4" currentPath="/q3" backPath="/q2"/>
    </div>
  )
}

let Q4 = (props) => {
  return(
    <div>
      <h1>Did you receive another conviction or deferred adjudication at any time between your sentence and within five years of the completion of your sentence?</h1>
      <YNQuestion yPath="/q4-branch" nPath="/q5" currentPath="/q4" backPath="/q3"/>
    </div>
  )
}

let Q5 = (props) => {
  return(
    <div>
      <h1>Was you case disposed of with the successful completion of a deferred adjudication?</h1>
      <YNQuestion yPath="/q5-branch" nPath="/q6" currentPath="/q5" backPath="/q4"/>
    </div>
  )
}

let Q6 = (props) => {

  return(
    <div>
      <h1>Was your case disposed of with the successful completion of probation?</h1>
      <YNQuestion yPath="/q6-branch" nPath="/q7" currentPath="/q6" backPath="/q5"/>
    </div>
  )
}

let Q7 = (props) => {

  return(
    <div>
      <h1>Was your case disposed of by the completion of time in jail?</h1>
      <YNQuestion yPath="/q7-branch" nPath="/dnqual-nd" currentPath="/q7" backPath="/q6"/>
    </div>
  )
}



export {Q1, Q2, Q3, Q4, Q5, Q6, Q7};