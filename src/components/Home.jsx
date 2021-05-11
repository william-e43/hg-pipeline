import React from "react";
import {SubmitButton, StyledLink} from '../style';


const Home = (props) => {
  return(
    <div>
      <h1>Record Clearing Qualifier</h1>
        <div>
          Welcome to the Record Clearing Qualifier
        </div>
        <div>
          <h2>Step 1: Gather your paperwork</h2>
          <span><b>You can get copies of these by calling the court clerk and making the request. Be friendly and tell them what you are trying to do. Most will be very helpful.</b></span>
          <ol>
            <li><span>Charging Documents: This will include any charging document (indictment, information, or ticket)
               coming out of your arrest (arrest includes a citation).</span></li>
            <li>Judgement or other paperwork memorializing the deal.</li>
            <li><span>Discharge paperwork: This will be paperwork attesting to how your case ended. It could be a dismissal, an email from the court if the case was rejected, a discharge from probation, or release from jail/prison.</span></li>
          </ol>
          <h2>Step 2: Take the qualifier</h2>
          <StyledLink to="/q1"><SubmitButton>Start</SubmitButton></StyledLink>
          <script src="https://www.dropbox.com/request/WJpr8GCkc7TAR09pnY1C" height="500 px" width="700px"></script>
        </div>
    </div>
  )
}

export default Home;