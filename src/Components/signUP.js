import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

class Register extends Component {
  state = {
    fullname: "",
    email: "",
    password: ""
  };
  constructor(props) {
    super(props);
  }
  handleChange = e => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value
    });
  };

  addUser = () => {
    const { email, username, password } = this.state;

    const db = firebase.firestore();

    console.log(email, password, "email,password");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = firebase.auth().currentUser;
        db.collection("users")
          .doc(user.uid)
          .set({
            Email: email,
            Username: username
          })
          .then(docRef => {})
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        alert(errorCode);
        // ...
      });
  };

  render() {
    let { email, password, username } = this.state;
    return (
      <div className="register">
        {/* <form onSubmit={this.displayLogin}> */}
        <div>
          <h2>Sign Up</h2>

          <div className="name">
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              // value={this.state.fullname}
              onChange={this.handleChange}
            />
          </div>

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

          <div className="password">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password1"
              onChange={this.handleChange}
            />
          </div>

          {/* </form> */}
          <Link to="/login">Login Here</Link>
          <button onClick={this.addUser}>Sign up</button>
        </div>
      </div>
    );
  }
}

export default Register;
