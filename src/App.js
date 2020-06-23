import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import MainLogin from "./MainLogin";
import PatientSignup from "./PatientSignup";
import PatientSignIn from "./PatientSignIn";
import Stripe from "./Stripe";

import { Redirect, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="container">
          <span id="alignment"></span>
          <div id="wrapper">
            <div id="sidebar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <NavLink to={"/PatientSignup"} className="nav-link">
                      Sign UP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/PatientSignIn"} className="nav-link">
                      Sign In
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div id="main" className="m-2">
              <Switch>
                {/* <Route path="/home" component={Home} />

                <Route path="/Contact" component={Contact} />
                <Route path="/About" component={About} /> */}
                {/* <Route path="/Registration" component={Registration} />

                <Route path="/MainLogin" component={MainLogin} /> */}
                <Route path="/PatientSignup" component={PatientSignup} />
                <Route path="/PatientSignIn" component={PatientSignIn} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Logout" component={Logout} />
                <Route path="/Stripe" component={Stripe} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
