import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import "firebase/firestore";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyC_mqE5OZHh4kQ2lPsvVuZu1Z-yWUoxnKM",
  authDomain: "quest-e99c3.firebaseapp.com",
  databaseURL: "https://quest-e99c3.firebaseio.com",
  projectId: "quest-e99c3",
  storageBucket: "quest-e99c3.appspot.com",
  messagingSenderId: "391157912324",
  appId: "1:391157912324:web:c31a7be1dd6c8a8458f651",
  measurementId: "G-W9E3Z1WQF3"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById("root"));
export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
