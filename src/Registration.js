import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Registration.css";
// import AppBar from "material-ui/AppBar";

class Registration extends Component {
  patientClick() {
    window.location = "/PatientSignup";
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="PatientCSS">
            <p>Patient EveryBody</p>
            <RaisedButton color="primary" onClick={this.patientClick}>
              Patient Signup
            </RaisedButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Registration;
