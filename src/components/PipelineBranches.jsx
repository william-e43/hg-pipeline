import React, {useState} from "react";
import {SubmitButton, StyledLink, Button, ButtonWrapper} from '../style';

const Q2Branch = (props) => {
  return(
    <div>
      <h2>You do not qualify for an expunction, keep going to see if you qualify for a non-disclosure</h2>
      <ButtonWrapper>
        <StyledLink to="/q2"><SubmitButton>Back</SubmitButton></StyledLink>
        <StyledLink to="/q3"><SubmitButton>Next</SubmitButton></StyledLink>
      </ButtonWrapper>
    </div>
  );
}
const Q4Branch = (props) => {
  return(
    <div>
      <h1>Q4 Warning Branch</h1>
      <p>“Keep going but there may be a problem if you received another conviction or deferred adjudication during any applicable wait period that followed the completion of your sentence.  As you move through each question, take note of the wait periods and this question.  If you received another conviction or deferred adjudication during that wait period then you will know you do not qualify for a non-disclosure and can stop the qualifier ”</p>
      <ButtonWrapper>
        <StyledLink to="/q4"><SubmitButton>Back</SubmitButton></StyledLink>
        <StyledLink to="/q5"><SubmitButton>Next</SubmitButton></StyledLink>
      </ButtonWrapper>
    </div>
  )
}
const Q5Branch = (props) => {

  const [path, setPath] = useState('/q5');
  const [a1, seta1] = useState();
  const [a2, seta2] = useState();
  const [a3, seta3] = useState();

  const onClick = (expr) => {
    switch (expr) {
      case 'ans1':
        seta1(true);
        seta2(false);
        seta3(false);
        setPath('/q5-qual1');
        break;
      case 'ans2':
        seta1(false);
        seta2(true);
        seta3(false);
        setPath('/q5-qual2');
        break;
      case 'ans3':
        seta1(false);
        seta2(false);
        seta3(true);
        setPath('/q5-qual3');
        break;
      default:
        alert('Please choose a valid input');
    }
  }

  return(
    <div>
      <h1>Red Pipeline</h1>
      <h1>There are three ways you might qualify for a non-disclosure.</h1>
      <h2>Choose the option that applies to you</h2>
      <ButtonWrapper>
        <Button state={a1} onClick={() => onClick('ans1')}>My case involved driving or boating while intoxicated</Button>
        <Button state={a2} onClick={() => onClick('ans2')}>My case was a misdemeanor and I was discharged after September 1, 2017</Button>
        <Button state={a3} onClick={() => onClick('ans3')}><div>Other or</div>My case was a felony</Button><br></br>
      </ButtonWrapper>
      {/* <h2>There are three ways you might qualify for a non-disclosure. These, and their wait times, are included below :</h2>
      <ul>
        <li>If your case involved driving or boating while intoxicated then you may be eligible so long as:<ul>
          <li>You have no prior convictions or deferred adjudications</li>
          <li>The case you are trying to get sealed is not on the “Big Naughty List”</li>
          <li>Your BAC was not listed in the deferred judgment as being above .15</li>
          <li>You were not involved in an accident that included another person in your car or otherwise</li>
          <li>Your wait period will be two years from the date of discharge</li>
          </ul></li><br></br>
        <li>If your case was a misdemeanor and you were discharged after September 1, of 2017 then you may be eligible so long as:
        <ul>
          <li>The case you are trying to get sealed is not on the list of prohibited cases</li>
          <li>Your wait period will be 180 days after the date you were sentenced</li>
        </ul></li><br></br>
        <li>If you do not qualify under the section just above or your case was a felony then you may be eligible so long as:
        <ul>
          <li>The case you are trying to get sealed is not on “Big Naughty List”</li>
          <li>Your wait period will be<ul>
            <li>Five years from your discharge if the case was a felony</li>
            <li>Two years from your discharge if the case was covered by any offense labeled by the penal code as 20, 21, 22, 25, 42, 43, or 46</li>
            <li>Immediately if the above does not apply</li>
            </ul></li>
        </ul></li>
      </ul> */}
      <StyledLink to="/q5"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to={path}><SubmitButton>Next</SubmitButton></StyledLink>
    </div>
  )
}
const Q6Branch = (props) => {

  const [path, setPath] = useState('/q6');
  const [a1, seta1] = useState();
  const [a2, seta2] = useState();
  const [a3, seta3] = useState();

  const onClick = (expr) => {
    switch (expr) {
      case 'ans1':
        seta1(true);
        seta2(false);
        seta3(false);
        setPath('/q6-qual1');
        break;
      case 'ans2':
        seta1(false);
        seta2(true);
        seta3(false);
        setPath('/q6-qual2');
        break;
      case 'ans3':
        seta1(false);
        seta2(false);
        seta3(true);
        setPath('/q6-qual3');
        break;
      default:
        alert('Please choose a valid input');
    }
  }

  return(
    <div>
      <h1>Blue Pipeline</h1>
      <h1>There are three ways you might qualify for a non-disclosure.</h1>
      <h2>Choose the option that applies to you</h2>
      <ButtonWrapper>
        <Button state={a1} onClick={() => onClick('ans1')}>My case involved misdemeanor driving while intoxicated</Button>
        <Button state={a2} onClick={() => onClick('ans2')}>My case was a misdemeanor other than a DWI</Button>
        <Button state={a3} onClick={() => onClick('ans3')}>I was a human trafficking victim</Button>
      </ButtonWrapper>
      {/* <ul>
        <li>If your case involved misdemeanor driving while intoxicated then you may be eligible so long as:
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
        </li><br></br>
        <li>If your case was a misdemeanor, other than a DWI, then you may be eligible so long as:
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
        </li><br></br>
        <li>If you were a human trafficking victim, then you may be eligible so long as:
          <ul>
            <li>Convicted under penal code 31.03/theft, 43.02/prostitution, 43.03/promotion of prostitution, health and safety code 481.120/delivery of marijuana, or 481.121/possession of marijuana</li>
            <li>Conviction set aside by judicial clemency</li>
            <li>Committed the offense solely as a victim of trafficking of persons</li>
          </ul>
        </li>
      </ul> */}
      <StyledLink to="/q6"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to={path}><SubmitButton>Next</SubmitButton></StyledLink>
    </div>
  )
}
const Q7Branch = (props) => {

  const [path, setPath] = useState('/q6');
  const [a1, seta1] = useState();
  const [a2, seta2] = useState();

  const onClick = (expr) => {
    switch (expr) {
      case 'ans1':
        seta1(true);
        seta2(false);
        setPath('/q7-qual1');
        break;
      case 'ans2':
        seta1(false);
        seta2(true);
        setPath('/q7-qual2');
        break;
      default:
        alert('Please choose a valid input');
    }
  }

  return(
    <div>
      <h1>Green Pipeline</h1>
      <h1>There are two ways you might qualify for a non-disclosure.</h1>
      <h2>Choose the option that applies to you</h2>
      <ButtonWrapper>
        <Button state={a1} onClick={() => onClick('ans1')}>My case involved misdemeanor driving while intoxicated</Button>
        <Button state={a2} onClick={() => onClick('ans2')}>My case was a misdemeanor other than a DWI</Button>
      </ButtonWrapper>
      {/* <ul>
        <li>
          <ul>If your case involved misdemeanor driving while intoxicated then you may be eligible so long as:
            <li>You have no prior convictions or deferred adjudications</li>
            <li>Your BAC was not listed in the deferred judgment as being above .15</li>
            <li>You were not involved in an accident that included another person in your car or otherwise</li>
            <li>
              <ul>
                <li>Three years from your release if you were required to have an ignition interlock in your car.</li>
                <li>Five years from your release if you were not required to have an interlock ignition device in your car</li>
              </ul>
            </li>
          </ul>
        </li><br></br>
        <li>If your case was a misdemeanor other than a DWI, then you may be eligible so long as:
          <ul>
            <li>You have no prior convictions or deferred adjudications</li>
            <li>The case you are trying to get sealed is not on the “Big Naughty List”</li>
            <li>Offense for which order is sought was not violent or sexual in nature with the exception of an offense under penal code 22.01</li>
            <li>Your wait period will be:
              <ul>
                <li>Two years from your discharge if the case was covered by any offense labeled by the penal code as 20, 21, 22, 25, 42, 43, or 46</li>
                <li>Immediately if the above does not apply</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul> */}
      <StyledLink to="/q7"><SubmitButton>Back</SubmitButton></StyledLink>
      <StyledLink to={path}><SubmitButton>Next</SubmitButton></StyledLink>
    </div>
  )
}

export {Q2Branch, Q4Branch, Q5Branch, Q6Branch, Q7Branch};