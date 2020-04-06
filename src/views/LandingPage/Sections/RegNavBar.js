import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import PersonInfo from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/LandingPage/Sections/PersonInfo.js";
import Upload from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/LandingPage/Sections/Upload.js";
import BankInfo from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/LandingPage/Sections/BankInfo.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function RegNavBar() {
  const classes = useStyles();
  return (
    <div id="navigation-pills">
      <h1 className={classes.textCenter}>
        <small>Admin Registration</small>
      </h1>
      <br />

      <GridContainer>
        <GridItem xs={12} sm={12} md={8} lg={12}>
          <NavPills
            color="primary"
            tabs={[
              {
                tabButton: "Personal Info",

                tabContent: <PersonInfo />,
              },
              {
                tabButton: "Upload",

                tabContent: <Upload />,
              },
              {
                tabButton: "Bank Info",

                tabContent: <BankInfo />,
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
