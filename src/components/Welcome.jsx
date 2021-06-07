import React from 'react';
import {Button, StyledLink, ButtonWrapper} from '../style';

const Welcome = (props) => {
  return(
    <div>
      <p>Welcome to the first step on the road to gaining the freedom of a clean record!  We are here to help and offer several pathways for you to choose from in this important work.  No matter which path you choose, you are in the right place.  We will be there every step of the way.</p>
      <p>We’ve designed the process of taking this journey to fit <i>your</i> budget.  You choose how many of the preliminary steps you want us to do for you knowing that, <b>should you be eligible to get your record cleared, the fees you paid will be applied against the fee for seeking to clear your record.</b> </p>
      <h3><b>Here are the plans: </b></h3>
      <div>
        <h3>Keep It Simple Option</h3>
        <p>Say the word and we’ll gather your documents, analyze your case, and explain the results in a written report for a fee of $250, and if eligible, the $250 will be applied to the fee for the legal work needed to clear your record. </p>
        <a href="https://myattorney.as.me/keepitsimpleoption" target="_blank" rel="noopener noreferrer">
          <ButtonWrapper>
            <Button >Book an appointment</Button>
          </ButtonWrapper>
        </a>
      </div>
      <h3>Free Option</h3>
      <p>You gather the documents on your own and use our online Qualifier to analyze your situation.  While the Qualifier will not produce  a final legal opinion, it is going to address the most common obstacles to a clean record giving you the confidence to take the next step.</p>
      <ButtonWrapper>
        <StyledLink to="/home"><Button>Start the Qualifier</Button></StyledLink>
      </ButtonWrapper>
    </div>

  )
}

export default Welcome;