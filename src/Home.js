import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
var homeImage = {
  width: "20%",
  height: "10%",
  marginLeft: "128px",
};
var bstyle = {
  marginLeft: "317px",
  fontSize: "26px",
  fontFamily: "sans-serif",
};
class Home extends Component {
  handleClick() {
    window.location = "/SIgnUP/Doctor/UserForm";
  }
  render() {
    return (
      <div>
        <b style={bstyle}> React App</b>
        <br />
        <b style={bstyle}> The digital health book</b>
        <br />
        <br />
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <img style={homeImage} src={require("../src/Image/Home.jpg.jpg")} />
      </div>
    );
  }
}

export default Home;
