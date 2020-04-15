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
import Upload from "views/LandingPage/Sections/Upload.js";

import InputMask from "react-input-mask";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link } from "react-router-dom";

import { Form, FormGroup, Label, Input } from "reactstrap";

// import "assets/css/style.css";
const useStyles = makeStyles(styles);
var hist = createBrowserHistory();
export default function PersonInfo() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="First Name"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Middle Name"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Last Name"
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
            labelText="Father Name"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={6} sm={2} md={2} lg={1.5}>
          <h3 className="gander">
            <small>Gender</small>
          </h3>
        </GridItem>

        <GridItem xs={6} sm={2} md={2} lg={2}>
          <div class="funkyradio">
            <div class="funkyradio-primary">
              <input type="radio" name="radio" id="radio1" checked />
              <label for="radio1">Male</label>
            </div>
          </div>
        </GridItem>
        <GridItem xs={6} sm={2} md={2} lg={2}>
          <div class="funkyradio">
            <div class="funkyradio-primary">
              <input type="radio" name="radio" id="radio2" />
              <label for="radio2">Female</label>
            </div>
          </div>
        </GridItem>

        <GridItem xs={6} sm={2} md={2} lg={2}>
          <div class="funkyradio">
            <div class="funkyradio-primary">
              <input type="radio" name="radio" id="radio3" />
              <label for="radio3">Others</label>
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <div className="form-group">
            <InputMask
              mask=" 0399     -   9999999"
              placeholder="Whatsapp No"
              style={{
                labelText: "CNIC",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                width: "95%",
                paddingTop: "45px",
              }}
            ></InputMask>
          </div>
        </GridItem>
      </GridContainer>

      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <div className="form-group">
            <InputMask
              mask=" 0399     -   9999999"
              placeholder="Ph No"
              style={{
                labelText: "CNIC",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                width: "95%",
                paddingTop: "45px",
              }}
            ></InputMask>
          </div>
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Alternative Email"
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
            labelText="Address"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Nearest Land Mark"
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
            labelText="Province"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Country"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Zip Code"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <br />
          <FormControl fullWidth>
            <Datetime inputProps={{ placeholder: "Date Of Birth" }} />
          </FormControl>
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <div className="form-group">
            <InputMask
              mask=" 99999     -   9999999    -   9"
              placeholder="CNIC"
              style={{
                labelText: "CNIC",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                width: "95%",
                paddingTop: "45px",
              }}
            ></InputMask>
          </div>
        </GridItem>
      </GridContainer>

      <GridContainer className="inputs">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Qualification"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Religion"
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
