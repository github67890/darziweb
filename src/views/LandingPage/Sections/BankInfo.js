import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Datetime from "react-datetime";
import People from "@material-ui/icons/People";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import Button from "components/CustomButtons/Button.js";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import InputMask from "react-input-mask";

import { Form, FormGroup, Label, Input } from "reactstrap";

// import "assets/css/style.css";
const useStyles = makeStyles(styles);

export default function BankInfo() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Bank Name"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Branch Name"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="City"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Account Name"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Type"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Account No"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="IBN"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
