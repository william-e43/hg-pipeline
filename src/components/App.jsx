import React from "react";
import {Q1, Q2, Q3, Q4, Q5, Q6, Q7} from "./Questions.jsx";
import {QualExpnc, DNQualExpnc, DNQualND, Q5Qual1, Q5Qual2, Q5Qual3, Q6Qual1, Q6Qual2, Q6Qual3, Q7Qual1, Q7Qual2} from "./EndCases.jsx";
import {Q2Branch, Q4Branch, Q5Branch, Q6Branch, Q7Branch} from "./PipelineBranches.jsx";
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
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/q1"> <Q1 /> </Route>
          <Route exact path="/q2"> <Q2 /> </Route>
          <Route exact path="/q3"> <Q3 /> </Route>
          <Route exact path="/q4"> <Q4 /> </Route>
          <Route exact path="/q5"> <Q5 /> </Route>
          <Route exact path="/q6"> <Q6 /> </Route>
          <Route exact path="/q7"> <Q7 /> </Route>
          {/*
          • using 'component' syntax below to allow for prop transfer b/w components during routing
          • use for components whose nav requires props passed during routing
          • idk why but props do not properly transfer w/out this component syntax
          */}
          <Route exact path="/qual-expnc" component={QualExpnc}></Route>
          <Route exact path="/dnqual-expnc" component={DNQualExpnc}></Route>
          <Route exact path="/dnqual-nd" component={DNQualND}></Route>
          <Route exact path="/q2-branch" component={Q2Branch}></Route>
          <Route exact path="/q4-branch" component={Q4Branch}></Route>
          <Route exact path="/q5-branch" component={Q5Branch}></Route>
          <Route exact path="/q5-qual1" component={Q5Qual1}></Route>
          <Route exact path="/q5-qual2" component={Q5Qual2}></Route>
          <Route exact path="/q5-qual3" component={Q5Qual3}></Route>
          <Route exact path="/q6-branch" component={Q6Branch}></Route>
          <Route exact path="/q6-qual1" component={Q6Qual1}></Route>
          <Route exact path="/q6-qual2" component={Q6Qual2}></Route>
          <Route exact path="/q6-qual3" component={Q6Qual3}></Route>
          <Route exact path="/q7-branch" component={Q7Branch}></Route>
          <Route exact path="/q7-qual1" component={Q7Qual1}></Route>
          <Route exact path="/q7-qual2" component={Q7Qual2}></Route>
        </Switch>
      </Main>
    );
  }
}

export default App;
