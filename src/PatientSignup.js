import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {
  Button,
  Card,
  CardFooter,
  CardBody,
  CardGroup,
  Col,
  div,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
var margainStyle = {
  width: "50%",
  border: "24px",
  marginLeft: "66px",
  borderStyle: "outset",
};
var textBoxStyle = {
  padding: "7px 20px",
  margin: "5px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};
var TextStyle = {
  float: "left",
  marginLeft: "17px",
};
var buttonStyle = {
  backgroundColor: "#19334d",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  float: "none",
  marginLeft: "170px",
};
var headerStyle = {
  backgroundColor: "#e6e6ff",
  color: "black",
};
class PatientSignup extends Component {
  constructor() {
    super();
    this.state = {
      LastName: "",
      FirstName: "",
      Address: "",
      City: "",
      EmailId: "",
      UserName: "",
      Password: "",
    };
    this.LastName = this.LastName.bind(this);
    this.FirstName = this.FirstName.bind(this);
    this.Address = this.Address.bind(this);
    this.City = this.City.bind(this);

    this.EmailId = this.EmailId.bind(this);
    this.UserName = this.UserName.bind(this);
    this.Password = this.Password.bind(this);

    this.register = this.register.bind(this);
  }
  LastName(event) {
    this.setState({ LastName: event.target.value });
  }
  FirstName(event) {
    this.setState({ FirstName: event.target.value });
  }
  Address(event) {
    this.setState({ Address: event.target.value });
  }
  City(event) {
    this.setState({ City: event.target.value });
  }

  EmailId(event) {
    this.setState({ Email: event.target.value });
  }

  UserName(event) {
    this.setState({ UserName: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  register(event) {
    fetch("http://localhost:60020/Api/Login/InsertUser", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        LastName: this.state.LastName,
        FirstName: this.state.FirstName,
        Address: this.state.Address,

        City: this.state.City,
        EmailId: this.state.EmailId,

        UserName: this.state.UserName,
        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())

      .then((Result) => {
        debugger;
        console.log(Result.ID);
        if (Result.ID != null) {
          debugger;
          //localStorage.setItem("userid", Result.ID);
          alert("register");
          this.props.history.push("/PatientSignUp");
        } else alert("Sorrrrrry !!!! Un-authenticated User !!!!!");
      });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <div>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div class="row" className="mb-2 pageheading">
                      <div class="col-sm-12 btn btn-primary">
                        <h1 style={headerStyle}>User Sign Up</h1>
                      </div>
                    </div>
                    <div style={margainStyle}>
                      <InputGroup className="mb-3" style={TextStyle}>
                        LastName: &nbsp;
                        <Input
                          style={textBoxStyle}
                          type="text"
                          onChange={this.LastName}
                          placeholder="Enter  Last Name"
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        &nbsp; FirstName :&nbsp;
                        <Input
                          style={textBoxStyle}
                          type="text"
                          onChange={this.FirstName}
                          placeholder="Enter First Name"
                        />
                      </InputGroup>

                      <InputGroup className="mb-3" style={TextStyle}>
                        &nbsp; City:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Input
                          style={textBoxStyle}
                          type="text"
                          onChange={this.City}
                          placeholder="Enter City"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        &nbsp; Email:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Input
                          style={textBoxStyle}
                          type="text"
                          onChange={this.EmailId}
                          placeholder="Enter  EmailId"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3" style={TextStyle}>
                        Address: &nbsp;&nbsp;&nbsp;
                        <Input
                          style={textBoxStyle}
                          type="text"
                          onChange={this.Address}
                          placeholder="Enter  PhoneNo"
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        &nbsp;&nbsp; UserName:&nbsp;&nbsp;
                        <Input
                          style={textBoxStyle}
                          type="text"
                          onChange={this.UserName}
                          placeholder="Enter  UserName"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3" style={TextStyle}>
                        Password: &nbsp;
                        <Input
                          style={textBoxStyle}
                          type="password"
                          onChange={this.Password}
                          placeholder="Enter Password"
                        />
                      </InputGroup>
                      <Button
                        style={buttonStyle}
                        onClick={this.register}
                        color="success"
                        block
                      >
                        Create Account
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default PatientSignup;
