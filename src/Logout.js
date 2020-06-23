import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
    };
    localStorage.removeItem("userid");
  }
  render() {
    return (
      <div>
        <b> React App</b>
        <Link to="/PatientSignIn">Login</Link>
      </div>
    );
  }
}
