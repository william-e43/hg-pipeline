import React from "react";
import {Q1, Q2, Q3, Q4, Q5, Q6, Q7} from "./Questions.jsx";
import {QualExpnc, DNQualExpnc, Q4Warning} from "./EndCases.jsx"
import Home from "./Home.jsx";
import {
  //BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path ="q1"> <Q1 /> </Route>
          <Route path="/q2"> <Q2 /> </Route>
          <Route path="/q3"> <Q3 /> </Route>
          <Route path="/q4"> <Q4 /> </Route>
          <Route path="/q5"> <Q5 /> </Route>
          <Route path="/q6"> <Q6 /> </Route>
          <Route path="/q7"> <Q7 /> </Route>
          <Route path="/qual-expnc"> <QualExpnc /> </Route>
          <Route path="/dnqual-expnc"> <DNQualExpnc /> </Route>
          <Route path="/q4-warning"> <Q4Warning /> </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
