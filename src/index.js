import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
// import "assets/css/style.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/HomePage/HomePage.js";
import PersonInfo from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/LandingPage/Sections/PersonInfo.js";
import Upload from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/LandingPage/Sections/Upload.js";
import BankInfo from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/LandingPage/Sections/BankInfo.js";
import { Person } from "@material-ui/icons";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />

      <Route path="/landing-page" component={LandingPage} />
      <Route path="/PersonInfo" component={PersonInfo} />
      <Route path="/Upload" component={Upload} />
      <Route path="/BankInfo" component={BankInfo} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      {/* <Route path="/HomePage" component={HomePage} /> */}
       <Route path="/form" component={Components} />
      <Route path="/" component={LoginPage} />
     
  
    </Switch>
  </Router>,
  document.getElementById("root")
);
