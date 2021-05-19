import React from "react";
import {SubmitButton, StyledLink, ButtonWrapper} from '../style';


const Home = (props) => {
  return(
    <div>
      <h1>Record Clearing Qualifier</h1>
        <h2>Welcome to the Record Clearing Qualifier</h2>
        <p>Whether you qualify for an expunction or non-disclousre is an important question to answer. We've developed this two-step process to help you answer it. The process begins with an analysis by our qualifier of whether you are eligible for an expunction and if not then the qualifier will help you analyze whether you are likely eligbile for a non-disclosure.</p>
        <p>Please note that <b>the analysis of the qualifier does not constitute legal advice or a legal opinion.</b> Many cases will involve considerations beyond the scope of the qualifier; however, the qualifier will help you to answer <b>whether you should investigate further into seeking to clear your record.</b></p>
        <p>Here are the steps: </p>
        <div>
          <h2>Step 1: Gather your paperwork <b>for every offense connected to your arrest.</b> This will include: </h2>
          <span><b>You can get copies of these by calling the court clerk and making the request. Be friendly and tell them what you are trying to do. Most will be very helpful.</b></span>
          <ul>
            <li><b>Charging Documents: </b>This will include any charging document (indictment, information, or ticket) coming out of your arrest <b>(arrest includes a citation)</b></li>
            <li><b>Judgement </b> or other paperwork memorializing the deal</li>
            <li><b>Discharge Paperwork: </b> This will be paperwork attesting to how your case ended. It could be a dismissal, an email from the court if the case was rejected, a discharge from probation or release from jail prison.</li>
          </ul>
          <h2>Step 2: Take the qualifier</h2>
          <ButtonWrapper>
            <StyledLink to="/q1"><SubmitButton>Start</SubmitButton></StyledLink>
          </ButtonWrapper>
        </div>
    </div>
  )
}

export default Home;