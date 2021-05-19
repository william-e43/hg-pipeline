import React from 'react';
import {YNQuestion, ThreeWayQuestion, MainNavButtons} from './ButtonTemplates.jsx';
import {SubmitButton, StyledLink, ButtonWrapper} from '../style';

const Q2Branch = (props) => {

  const propsObj = {
    backPath: props.location.state.from,
    nextPath: '/q3'
  }
  return(
    <div>
      <h2>You do not qualify for an expunction, <b>keep going to see if you qualify for a non-disclosure</b></h2>
      <MainNavButtons props={propsObj} />
    </div>
  );
}

const Q4Branch = (props) => {
  return(
    <div>
      <p>Keep going but there may be a problem if you received another conviction or deferred adjudication during any applicable wait period that followed the completion of your sentence.  As you move through each question, take note of the wait periods and this question.  If you received another conviction or deferred adjudication during that wait period then you will know you do not qualify for a non-disclosure and can stop the qualifier</p>
      <ButtonWrapper>
        <StyledLink to="/q4"><SubmitButton>Back</SubmitButton></StyledLink>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledLink to="/q5"><SubmitButton>Next</SubmitButton></StyledLink>
      </ButtonWrapper>
    </div>
  )
}

const Q5Branch = (props) => {
  const propsObj = {
    firstPath: '/q5-qual1',
    secondPath: '/q5-qual2',
    thirdPath: '/q5-qual3',
    currentPath: '/q5-branch',
    backPath: '/q5',
    fPathText: 'My case involved driving or boating while intoxicated',
    sPathText:  'My case was a misdemeanor and I was discharged after September 1, 2017',
    tPathText: 'Other or My case was a felony'
  }

  return(
    <div>
      <h1>There are three ways you might qualify for a non-disclosure.</h1>
      <h2>Choose the option that applies to you</h2>
      <ThreeWayQuestion props={propsObj}/>
    </div>
  )
}

const Q6Branch = (props) => {

  const propsObj = {
    firstPath: '/q6-qual1',
    secondPath: '/q6-qual2',
    thirdPath: '/q6-qual3',
    currentPath: '/q6-branch',
    backPath: '/q6',
    fPathText: 'My case involved misdemeanor driving while intoxicated',
    sPathText:  'My case was a misdemeanor other than a DWI',
    tPathText: 'I was a human trafficking victim'
  }

  return(
    <div>
      <h1>There are three ways you might qualify for a non-disclosure.</h1>
      <h2>Choose the option that applies to you</h2>
      <ThreeWayQuestion props={propsObj}/>
    </div>
  )
}

const Q7Branch = (props) => {

  const yText = 'My case involved misdemeanor driving while intoxicated';
  const nText = 'My case was a misdemeanor other than a DWI';

  return(
    <div>
      <h1>There are two ways you might qualify for a non-disclosure.</h1>
      <h2>Choose the option that applies to you</h2>
      <YNQuestion yPath="/q7-qual1" nPath="/q7-qual2" currentPath="/q7-branch" backPath="/q7" yButtonText={yText} nButtonText={nText}/>
    </div>
  )
}

export {Q2Branch, Q4Branch, Q5Branch, Q6Branch, Q7Branch};