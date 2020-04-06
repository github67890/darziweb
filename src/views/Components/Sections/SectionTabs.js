import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Datetime from "react-datetime";
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


import {  Form, FormGroup, Label, Input } from 'reactstrap';


// import "assets/css/style.css";
const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div >
      <div >
        <div id="nav-tabs">
          <h3>Navigation Tabs</h3>
          
          <GridContainer>
           
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.textCenter}>
                <small>Admin Registration</small>
              </h1>
              <br/>
              <CustomTabs
                plainTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "Personal Info",
                    tabContent: (
                      <div>
                    <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
              
                labelText="First Name"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Middle Name"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Last Name"
                id="float"
                formControlProps={{
                  fullWidth: true
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
                  fullWidth: true
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
            <input type="radio" name="radio" id="radio1" checked/>
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
              <CustomInput
                labelText="Phone Number"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Whatsapp Number"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>
            </GridContainer>

            <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Email"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Alternative Email"
                id="float"
                formControlProps={{
                  fullWidth: true
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
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Nearest Land Mark"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="City"
                id="float"
                formControlProps={{
                  fullWidth: true
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
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Country"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Zip Code"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>
            </GridContainer>


            <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
             
                     
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Date Of Birth" }}
                    />
                  </FormControl>
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="CNIC"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            </GridContainer>

            <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Qualification"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Religion"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>
            
            </GridContainer>
            <br/><br/>
            <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
             
              
              <Button color="default">Back</Button>
             
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
             
             
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
            <Button color="info">Next</Button>
            </GridItem>
            </GridContainer>



</div>

                    )
                  },
                  {
                    tabName: "Upload",
                    tabContent: (
<div>
                       <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={12} md={12} lg={12}>
                      <h2> <h2>Applicant’s documents</h2></h2>
                      <p className={classes.textCenter}>
                        Must be a forward‑facing, centered photo including the driver’s full face and top of shoulders, 
                        with no sunglasses. Must be a photo only of the applicant with no other subject in the frame, well‑lit, 
                        and in focus. It cannot be an applicant’s CNIC photo or other printed photograph
                      </p>
                      <Input type="file" name="file" id="exampleFile" />
                     
                     </GridItem>
                     </GridContainer>
                     

                     <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={12} md={12} lg={12}>
                        <h2>Applicant’s documents</h2>
                      <p >
                      A valid National ID Card (Front & Back). Also a Valid CNIC of one of the parent. 
                      </p>
                      <Input type="file" name="file" id="exampleFile" />
                     
                     </GridItem>
                     </GridContainer>

<br/>
                     <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
             
              
              <Button color="default">Back</Button>
             
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
             
             
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
            <Button color="info">Next</Button>
            </GridItem>
            </GridContainer>





                      </div>
                    )
                  },
                  {
                    tabName: "Bank Info",
                   
                    tabContent: (
                     <div>
               <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
              
                labelText="Bank Name"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Branch Name"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="City"
                id="float"
                formControlProps={{
                  fullWidth: true
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
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Type"
                id="float"
                formControlProps={{
                  fullWidth: true
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
                  fullWidth: true
                }}
              />
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="IBN"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
  
            </GridItem>
            </GridContainer>

          


            <GridContainer className="inputs"> 
                      <GridItem xs={12} sm={4} md={4} lg={3}>
             
              
              <Button color="default">Back</Button>
             
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
             
             
  
            </GridItem>

            <GridItem xs={12} sm={4} md={4} lg={3}>
            <Button color="info">Next</Button>
            </GridItem>
            </GridContainer>








                     </div>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
