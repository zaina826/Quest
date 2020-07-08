import * as firebase from "firebase";
require("firebase/firestore")
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export { firebase, db as default };
