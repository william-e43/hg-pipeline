import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

function Home(props) {
  return(
    <div className="App">
      <h3>Hamilton Grant Record Clearing Qualifier</h3>
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
            <li>Discharge paperwork: This will be paperwork attesting to how your case ended. It could be a dismissal, an email from the court if the case was rejected, a discharge from probation, or release from jail/prison.</li>
          </ol>
          <h2>Step 2: Take the qualifier</h2>
            <Link to="/q1">Take the Qualifier</Link>
        </div>
    </div>
  )
}

export default Home;