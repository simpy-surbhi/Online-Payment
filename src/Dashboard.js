import React, { Component } from "react";
import "./App.css";
import RaisedButton from "material-ui/RaisedButton";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  Grid,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import Charge from "./Charge";

var navBarlist = {
  float: "left",
  display: "block",
  color: "black",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "17px",
  borderBottom: "3px solid transparent",
  marginLeft: "297px",
  color: "black",
  marginBottom: "-18px",
};

var navBar = {
  overflow: "hidden",
  backgroundColor: "#f1f1f1",
};
var logoutStyle = {
  float: "right",
  marginLeft: "360px",
};
var margainStyle = {
  width: "466px",
  border: "24px",
  marginTop: "45px",
  marginLeft: "190px",
  borderStyle: "outset",
};

var headStyle = {
  marginLeft: "40px",
};
var inputStyle = {
  marginLeft: "121px",
};
var textStyle = {
  marginLeft: "43px",
};
var payStyle = {
  marginLeft: "154px",
};
var pStyle = {
  marginLeft: "54px",
};
const totalPrice = 58;
export default class Dasboard extends React.Component {
  patienClick() {
    localStorage.removeItem("userid");
    window.location = "/PatientSignIn";
  }
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      username: "",
    };
  }
  handleToken(token, addresses) {
    console.log({ token, addresses });
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    var rows = [];

    return (
      <div>
        <div class="topnav" style={navBar}>
          <a style={navBarlist} class="active" href="#contact">
            <h3>
              <Link onClick={this.patienClick} style={logoutStyle}>
                logout
              </Link>
              <u>Online Payment</u>
            </h3>
          </a>
        </div>
        <div style={margainStyle}>
          <h1 style={headStyle}>Enter Donate Amount:</h1>
          <input
            style={inputStyle}
            type="text"
            onChange={this.myChangeHandler}
          />
          <h1 style={textStyle}>Your Donate Amount:{this.state.username}</h1>
          <p style={pStyle}>Pay Total of $ {this.state.username}</p>
          <p style={payStyle}>
            <Charge price={this.state.username} />
          </p>
        </div>
      </div>
    );
  }
}
