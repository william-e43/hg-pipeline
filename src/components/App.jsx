import React from "react";
import {Q1, Q2} from "./Questions.jsx";
import Home from "./Home.jsx";
import Dnq from "./Dnq.jsx";
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
          <Route exact path="/q1">
            <Q1 />
          </Route>
          <Route exact path="/">
            <Home />
        </Route>
        <Route path="/q2"> <Q2 /> </Route>
        <Route path="/dnq"><Dnq /></Route>
        </Switch>
      </div>

    );
  }
}

export default App;
