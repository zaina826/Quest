import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import firebase from "./firebase"
function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setname] = useState("")
  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <input value={name} onChange={e => setname(e.target.value)} />

      <Button onClick={onRegister}>Create account</Button>
    </div>
  )
  async function onRegister() {
    try {
      await firebase.register(name, email, password)
      await firebase.addName(name)
      props.history.replace('home')
    } catch (error) {
      alert(error.message)
    }
  }

}
export default Register