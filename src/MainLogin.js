import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Registration.css";
// import AppBar from "material-ui/AppBar";

class Registration extends Component {
  patientClick() {
    window.location = "/PatientSignIn";
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <div className="PatientCSS">
              <p>Patient EveryBody</p>
              <RaisedButton color="primary" onClick={this.patientClick}>
                Patient Login
              </RaisedButton>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Registration;
