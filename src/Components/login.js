import React, { Component } from "react";
import * as firebase from "firebase";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value
    });
  };

  signin = () => {
    const db = firebase.firestore();
    console.log(this.state.email);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        db.collection("users")
          .doc(res.user.uid)
          .get()
          .then(doc => {});
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <div>
          <h2>log in </h2>

          <div className="email">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              // value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="pasword">
            <input
              type="password"
              placeholder="Password"
              name="password"
              // value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button onClick={this.signin}>log in </button>
          <Link to="/">create account!</Link>
        </div>
      </div>
    );
  }
}

export default Login;
