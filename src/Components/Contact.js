import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import TextBox from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";

var navBar = {
  overflow: "hidden",
  backgroundColor: "#f1f1f1",
};
var navBarlist = {
  float: "left",
  display: "block",
  color: "black",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  fontSize: "17px",
  borderBottom: "3px solid transparent",
  backgroundColor: "rgb(230, 230, 255)",
  color: "black",
};
var formDetails = {
  marginLeft: "48px",
};
var messagestyle = {
  width: "20%",
  height: "60px",
};
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.state1 = { checked: true };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  handleChange2() {
    this.setState({
      checked: !this.state1.checked,
    });
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const { values, handleChange } = this.props;
    const content =
      this.state.checked || this.state1.checked ? <div> Content </div> : null;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div class="topnav" style={navBar}>
            <a style={navBarlist} class="active" href="#contact">
              Contact Us
            </a>
          </div>
          {/* <AppBar title="Contact" /> */}
          <br />
          <div style={formDetails}>
            <TextField
              ref="Name"
              placeholder="Name"
              label="Enter your Name"
              margin="normal"
            />
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <TextField
              ref="Email"
              placeholder="Email"
              label="Enter your Email"
              margin="normal"
            />
            <br /> <br />
            <br />
            <label>Meassage: </label> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <textarea
              style={messagestyle}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            <br /> <br />
            <RaisedButton
              color="secondary"
              variant="contained"
              onClick={this.back}
            >
              Back
            </RaisedButton>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <RaisedButton
              color="primary"
              variant="contained"
              onClick={this.continue}
            >
              Continue
            </RaisedButton>
          </div>
          {/* </Dialog> */}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Contact;
