import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
// import "assets/css/style.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// pages for this product
import ProfilePage from "views/ProfilePage.js";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";

import Signup from "views/LoginPage/Signup.js";
import Signin from "views/LoginPage/Signin.js";
import HomePage from "views/HomePage/HomePage.js";
import PersonInfo from "views/LandingPage/Sections/PersonInfo.js";
import Upload from "views/LandingPage/Sections/Upload.js";
import BankInfo from "views/LandingPage/Sections/BankInfo.js";
import { Person } from "@material-ui/icons";

var hist = createBrowserHistory();
var records='';
ReactDOM.render(


  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />


      <Route path="/landing-page" component={LandingPage} />
      <Route path="/PersonInfo" component={PersonInfo} />
      <Route path={"/landing-page/Upload"} component={Upload} />
      <Route path="/BankInfo" component={BankInfo} />
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/Signup" component={Signup} />
      {/* <Route path="/HomePage" component={HomePage} /> */}
      <Route path="/form" component={Components} />
      <Route path="/" component={Signin} />
    </Switch>
  </Router>,
  
  document.getElementById("root")
);
