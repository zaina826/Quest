import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Login from "./Components/login";
import Register from "./Components/signUP";
import "./App.css";
import { render } from "@testing-library/react";
import Navbar from "./Components/navbar.jsx";
import NewQuest from "./Components/newquest.jsx";
import Home from "./Components/home.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route path="/Signup" component={Register} />
            <Route exact path="/newquest" component={NewQuest} />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
