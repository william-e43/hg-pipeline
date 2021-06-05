import React from 'react';
import {MainNavButtons} from './ButtonTemplates.jsx';
import {Button, ButtonWrapper} from '../style';

/*
  This file holds all the components for the pipeline end cases (and some edge case scenarios)
  (i.e. when the user either qualifies or is disqualified one of these components is rendered)
*/

const QualNextSteps = (props) => {
  return (
    <div>
      <p>
      The next step is to schedule a consultation to confirm your eligibility and get signed up for the process.  To take this step, please schedule a consultation. At the consultation we’ll provide you a link to upload the documents you have gathered, a link to confidentially provide the personal information required to be entered on your petition, and a time to meet with your attorney to confirm your eligibility, answer questions, arrange for payment, (a combination of legal and filing fees), and review the timing and procedures that will take place in your case.  The legal fees are $1,775.00 and the filing fees will vary depending on the type of petition we will draft and the county of filing.  The typical range for filing fees is $365 to $575.
      </p>
      <a href="https://myattorney.as.me/clearmyrecord " target="_blank" rel="noopener noreferrer">
        <ButtonWrapper>
          <Button >Schedule a consultation</Button>
        </ButtonWrapper>
      </a>
    </div>
  )
}

const DNQualNextSteps = (props) => {
  return (
    <div>
      <p>
      Although you do not appear to have an eligible case we are happy to double check your work and if you still do not qualify <b>there is another option to consider.</b>  That option is the pardon process.
      </p>
      <p>
      Seeking a pardon is a process we can discuss with you and one we can help you through.  As a client once said: “don’t ask, don’t get.”  He was right.  Compared with seeking an expunction or non-disclosure, seeking a pardon is not a high probability process but having a clear record can change your life and so we would love to try the pardon process on your behalf.
      </p>
      <p>
      If you would like a consult with an attorney to review all of this, the next step is to get signed up for the process.  To take this step, please schedule a Double Check Consultation. At the consultation we’ll provide you a link to upload the documents you have gathered, and a time to meet with an attorney to confirm your eligibility, and answer questions about your situation.  We’ll spend up to an hour discussing your situation.  Our normal hourly rate is $400.  For your situation we have discounted this rate to $250.  This will include the time to review your materials and verify your eligibility and meet for your consult.  Should we be able to help you move forward, the $250 will be applied to your fees for that legal work.
      </p>
      <a href="https://myattorney.as.me/doublecheckconsult" target="_blank" rel="noopener noreferrer">
        <ButtonWrapper>
          <Button >Schedule a consultation</Button>
        </ButtonWrapper>
      </a>
    </div>
  )
}

const QualExpnc = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }

  return(
    <div>
      <h2>Congratulations you may qualify for an expunction.</h2>
      <QualNextSteps />
      <MainNavButtons props={propsObj}/>
    </div>
  )
}

//I think this end case can be deleted. It's never used. q2-branch handles this case.
const DNQualExpnc = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }

  return (
    <div>
      <h2>You do not qualify for an expunction.</h2>
      <DNQualNextSteps />
      <MainNavButtons props={propsObj}/>
    </div>
  )
}

const DNQualND = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }
  return (
    <div>
      <h2>You do not qualify for an expunction or non-disclosure</h2>
      <DNQualNextSteps />
      <MainNavButtons props={propsObj}/>
    </div>
  )
}

const Q5Qual1 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }
  return(
    <div>
      <h3>Your case involved driving or boating while intoxicated so you may be eligible for a non-disclosure so long as:</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>The case you are trying to get sealed is not on the Prohibited Case List</li>
        <li>Your BAC was not listed in the deferred judgment as being above .15</li>
        <li>You do not hold a CDL</li>
        <li>You were not involved in an accident that included another person in your car or otherwise</li>
        <li>Your wait period will be two years from the date of discharge</li>
      </ul><br></br>
      <QualNextSteps />
      <MainNavButtons props={propsObj}/>
    </div>
  )
}

const Q5Qual2 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }
  return(
    <div>
      <h3>Your case was a misdemeanor and you were discharged after September 1, 2017 so you may be eligible for a non-disclosure so long as</h3>
      <ul>
        <li>The case you are trying to get sealed is not on the Prohibited Case List</li>
        <li>Your wait period will be 180 days after the date you were sentenced</li>
      </ul>
      <QualNextSteps />
      <MainNavButtons props={propsObj}/>
    </div>
  )
}

const Q5Qual3 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }

  return(
    <div>
      <h3>Your case was a felony so you may be eligible for a non-disclosure so long as</h3>
      <ul>
        <li>The case you are trying to get sealed is not on the “Prohibited Case List”</li>
        <li>Your wait period will be
          <ul>
            <li>Five years from your discharge if the case was a felony</li>
            <li>Two years from your discharge if the case was covered by any offense labeled by the penal code under sections 20, 21, 22, 25, 42, 43, or 46 (see prohibited case list)</li>
            <li>Immediately if the above does not apply</li>
          </ul></li>
      </ul>
      <QualNextSteps />
      <MainNavButtons props={propsObj}/>
    </div>
  )
}

const Q6Qual1 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }
  return(
    <div>
      <h3>Your case involved misdemeanor driving while intoxicated so you may be eligible for a non-disclousre so long as</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>Your BAC was not listed in the judgment as being above .15</li>
        <li>You were not involved in an accident that included another person in your car or otherwise</li>
        <li>Your wait period will be:
          <ul>
            <li>Two years from your discharge if you were required to have an ignition interlock in your car.</li>
            <li>Five years from your discharge if you were not required to have an interlock ignition device in your car</li>
          </ul>
        </li>
      </ul>
      <QualNextSteps />
      <MainNavButtons props={propsObj} />
    </div>
  )
}

const Q6Qual2 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }

  return(
    <div>
      <h3>Your case was a misdemeanor other than a DWI so you may be eligible for a non-disclosure so long as</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>The case you are trying to get sealed is not on the “Prohibited Case List”</li>
        <li>Your wait period will be:
          <ul>
            <li>Two years from your discharge if the case was covered by any offense labeled by the penal code under sections 20, 21, 22, 25, 42, 43, or 46 (see prohibited case list)</li>
            <li>Immediately if the above does not apply</li>
          </ul>
        </li>
      </ul>
      <QualNextSteps />
      <MainNavButtons props={propsObj} />
    </div>
  )
}

const Q6Qual3 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }
  return(
    <div>

      <h3>You were a human trafficking victim so you may qualify for a non-disclosure so long as</h3>
      <ul>
        <li>Conviction set aside by judicial clemency</li>
        <li>Committed the offense solely as a victim of trafficking of persons</li>
        <li>Convicted under penal code 31.03/theft, 43.02/prostitution, 43.03/promotion of prostitution, health and safety code 481.120/delivery of marijuana, or 481.121/possession of marijuana</li>
      </ul>
      <QualNextSteps />
      <MainNavButtons props={propsObj}/>
    </div>
  )
}

const Q7Qual1 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }
  return(
    <div>
      <h3>Your case involved misdemeanor driving while intoxicated so you may be eligible for a non-disclosure so long as:</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>Your BAC was not listed in the judgment as being above .15</li>
        <li>You were not involved in an accident that included another person in your car or otherwise</li>
        <li> Your wait period will be:
          <ul>
            <li>Three years from your release if you were required to have an ignition interlock in your car.</li>
            <li>Five years from your release if you were not required to have an interlock ignition device in your car</li>
          </ul>
        </li>
      </ul>
      <QualNextSteps />
      <MainNavButtons props={propsObj} />
    </div>
  )
}

const Q7Qual2 = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: null
  }
  return(
    <div>

      <h3>Your case involved a misdemeanor other than a DWI, so you may be eligible for a non-disclosure so long as:</h3>
      <ul>
        <li>You have no prior convictions or deferred adjudications</li>
        <li>The case you are trying to get sealed is not on the “Prohibited Case List”</li>
        <li>Offense for which order is sought was not violent or sexual in nature with the exception of an offense under penal code 22.01</li>
        <li>Your wait period will be:
          <ul>
            <li>Two years from your discharge if the case was covered by any offense labeled by the penal code under sections 20, 21, 22, 25, 42, 43, or 46 (see prohibited case list)</li>
            <li>Immediately if the above does not apply</li>
          </ul>
        </li>
      </ul>
      <QualNextSteps />
      <MainNavButtons props={propsObj} />
    </div>
  )
}

export {QualExpnc, DNQualExpnc, DNQualND, Q5Qual1, Q5Qual2, Q5Qual3, Q6Qual1, Q6Qual2, Q6Qual3, Q7Qual1, Q7Qual2};