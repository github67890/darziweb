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

export default function Upload() {
  const classes = useStyles();
  return (
    <div style={{ color: "black" }}>
      <GridContainer className="inputs">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <h2>
            {" "}
            <h2>Applicant’s documents</h2>
          </h2>
          <p className={classes.textCenter}>
            Must be a forward‑facing, centered photo including the driver’s full
            face and top of shoulders, with no sunglasses. Must be a photo only
            of the applicant with no other subject in the frame, well‑lit, and
            in focus. It cannot be an applicant’s CNIC photo or other printed
            photograph
          </p>
          <Input type="file" name="file" id="exampleFile" />
        </GridItem>
      </GridContainer>

      <GridContainer className="inputs">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <h2>Applicant’s documents</h2>
          <p>
            A valid National ID Card (Front & Back). Also a Valid CNIC of one of
            the parent.
          </p>
          <Input type="file" name="file" id="exampleFile" />
        </GridItem>
      </GridContainer>
    </div>
  );
}
