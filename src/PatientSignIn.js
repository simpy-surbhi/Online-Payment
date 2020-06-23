import React, { Component } from "react";
import "./App.css";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
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
var headerStyle = {
  backgroundColor: "#e6e6ff",
  color: "black",
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

class PatientSignIn extends Component {
  constructor() {
    super();

    var id = localStorage.getItem("userid");

    if (id != null) {
      window.location = "/Dashboard";
      return;
    }

    this.state = {
      UserName: "",
      Password: "",
    };

    this.Password = this.Password.bind(this);
    this.UserName = this.UserName.bind(this);
    this.login = this.login.bind(this);
  }

  UserName(event) {
    this.setState({ UserName: event.target.value });
  }
  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    debugger;

    fetch("http://localhost:60020/Api/login/Login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: this.state.UserName,
        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        debugger;
        console.log(result);

        if (result.Status == "Invalid") alert("Invalid User");
        else localStorage.setItem("userid", result.ID);
        alert("valid user");
        //this.props.history.push("/Dashboard");
        window.location = "/Dashboard";
        //   }
      });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <div class="row" className="mb-2 pageheading">
                        <div class="col-sm-12 btn btn-primary">
                          <h1 style={headerStyle}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Patient Login
                          </h1>
                        </div>
                      </div>
                      <div style={margainStyle}>
                        <InputGroup className="mb-3" style={TextStyle}>
                          UserName: &nbsp;
                          <Input
                            name="UserName"
                            value={this.state.UserName}
                            style={textBoxStyle}
                            type="text"
                            onChange={this.UserName}
                            placeholder="Enter  User Name"
                          />
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.nameError}
                          </div>
                        </InputGroup>

                        <InputGroup className="mb-3">
                          &nbsp; Password :&nbsp;
                          <Input
                            style={textBoxStyle}
                            name="password"
                            value={this.state.Password}
                            type="password"
                            onChange={this.Password}
                            placeholder="Enter  Password"
                          />
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                          </div>
                        </InputGroup>

                        <Button
                          style={buttonStyle}
                          onClick={this.login}
                          color="success"
                          block
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PatientSignIn;
