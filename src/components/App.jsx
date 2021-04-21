import React from "react";
import {Q1, Q2, Q3, Q4, Q5, Q6, Q7} from "./Questions.jsx";
import {QualExpnc, DNQualExpnc} from "./EndCases.jsx";
import {Q4Branch, Q5Branch, Q6Branch, Q7Branch} from "./PipelineBranches.jsx";
import Home from "./Home.jsx";
import { Switch, Route} from "react-router-dom";
import styled from 'styled-components';

const Main = styled.div`
  color: #393A3D;
  margin-left: 20px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="/q1"> <Q1 /> </Route>
          <Route path="/q2"> <Q2 /> </Route>
          <Route path="/q3"> <Q3 /> </Route>
          <Route path="/q4"> <Q4 /> </Route>
          <Route path="/q5"> <Q5 /> </Route>
          <Route path="/q6"> <Q6 /> </Route>
          <Route path="/q7"> <Q7 /> </Route>
          <Route path="/qual-expnc"> <QualExpnc /> </Route>
          <Route path="/dnqual-expnc"> <DNQualExpnc /> </Route>
          <Route path="/q4-branch"> <Q4Branch /> </Route>
          <Route path="/q5-branch"> <Q5Branch /> </Route>
          <Route path="/q6-branch"> <Q6Branch /> </Route>
          <Route path="/q7-branch"> <Q7Branch /> </Route>
        </Switch>
      </Main>
    );
  }
}

export default App;
