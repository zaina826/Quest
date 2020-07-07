import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Login from "./Components/login";
import Register from "./Components/signUP";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <switch>
            {/* <Route exact path="/" component={Login} /> */}
            <Route path="/" component={Register} />
            <Route path="/login" component={Login} />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
