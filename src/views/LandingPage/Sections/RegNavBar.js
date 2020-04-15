import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import { Tabs, Tab, TabContainer, TabContent, TabPane } from "react-bootstrap";
import Button from "components/CustomButtons/Button.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import PersonInfo from "views/LandingPage/Sections/PersonInfo.js";
import Upload from "views/LandingPage/Sections/Upload.js";
import BankInfo from "views/LandingPage/Sections/BankInfo.js";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Datetime from "react-datetime";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import axios from 'axios';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function RegNavBar() {
  const [key, setKey] = useState("personal");
  const classes = useStyles();
  const [fname, setfname] = useState("");
  const [selectedFile ,setselectedFile] = useState("");
  const [selectedFile1 ,setselectedFile1] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [fathername, setfathername] = useState("");
  const [gender, setgender] = useState("Male");

  const [ph, setph] = useState("");

  const [wnumber, setwnumber] = useState("");

  const [email, setemail] = useState("");
  const [altemail, setaltemail] = useState("");
  const [address, setaddress] = useState("");
  const [nlandmark, setnlandmark] = useState("");
  const [city, setcity] = useState("");
  const [zipcode, setzipcode] = useState("");

  const [province, setprovince] = useState("");
  const [country, setcountry] = useState("");

  const [bday, setbday] = useState("");
  const [cnic, setcnic] = useState("");
  const [quli, setquli] = useState("");
  const [bankname, setbankname] = useState("");
  const [branchname, setbranchname] = useState("");
  const [bankcity, setbankcity] = useState("");
  const [accountname, setaccountname] = useState("");
  const [type, settype] = useState("");
  const [relegion, setrelegion] = useState("");
  const [accountno, setaccountno] = useState("");
  const [ibn, setibn] = useState("");
  const perNext = () => {
    setKey("upload");
  };

  const Upnext = () => {
    setKey("bank");
  };

  const UpBack = () => {
    setKey("personal");
  };

  const BankBack = () => {
    setKey("upload");
  };
 
  const handlegender = (e) => {
    setgender(e.target.value);
  };
  
  const handlerdate = (e) => {
    setbday(e.target.value);
  };
  const onChangeHandler= (e) => {
    setselectedFile(e.target.files[0]);
   
   };
   const onChangeHandler1= (e) => {
    setselectedFile1(e.target.files[0]);
   
   };

  const getalldata = async() => {

     
   const data = new FormData();
   const data1 = new FormData()
   data.append('file', selectedFile);
   data1.append('file1', selectedFile1);
   console.log(selectedFile);
   axios.post("https://darzieverywhere.herokuapp.com/api/users/upload", data, { 
      // receive two    parameter endpoint url ,form data
  })
.then(res => { // then print response status
    console.log(res.statusText)
 })

 axios.post("https://darzieverywhere.herokuapp.com/api/users/upload1", data1, { 
  // receive two    parameter endpoint url ,form data
})
.then(res => { // then print response status
console.log(res.statusText)
})


   
   
   const response= await fetch("https://darzieverywhere.herokuapp.com/api/users/sendadmindata", {

        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `fname=${fname}&mname=${mname}&lname=${lname}&fathername=${fathername}
        &ph=${ph}&wnumber=${wnumber}&email=${email}&altemail=${altemail}
        &address=${address}&nlandmark=${nlandmark}&city=${city}&province=${province}
        &country=${country}&zipcode=${zipcode}
        &bday=${bday}&cnic=${cnic}
        &quli=${quli}&relegion=${relegion}
        &bankname=${bankname}&branchname=${branchname}&bankcity=${bankcity}&accountname=${accountname}
        &type=${type}&accountno=${accountno}&ibn=${ibn}&data=${data}`,
      });
      const json=await response.json();
alert('thanks your all data submitted');
     
     


    
  };
  return (
    <div id="navigation-pills">
      <h1 className={classes.textCenter}>
        <small>Order Booker Registration</small>
      </h1>
      <br />

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        style={{
          paddingTop: "45px",
          border: "none",
          color: "red",
        }}
      >
        <Tab eventKey="personal" title="Personal Info">
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="First Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setfname(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setmname(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setlname(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setfathername(e.target.value),
                   
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
                    <input type="radio" name="radio" value="Male" id="radio1" onChange={handlegender} checked />
                    <label for="radio1">Male</label>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={6} sm={2} md={2} lg={2}>
                <div class="funkyradio">
                  <div class="funkyradio-primary">
                    <input type="radio" name="radio" value="Female" onChange={handlegender} id="radio2" />
                    <label for="radio2">Female</label>
                  </div>
                </div>
              </GridItem>

              <GridItem xs={6} sm={2} md={2} lg={2}>
                <div class="funkyradio">
                  <div class="funkyradio-primary">
                    <input type="radio" name="radio" value="other"  onChange={handlegender} id="radio3" />
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
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setph(e.target.value),
                   
                  }}
                />
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Whatsapp Number"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setwnumber(e.target.value),
                   
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
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setemail(e.target.value),
                   
                  }}
                />
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Alternative Email"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setaltemail(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setaddress(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setnlandmark(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setcity(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setprovince(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setcountry(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setzipcode(e.target.value),
                   
                  }}
                />
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <br />
                <FormControl fullWidth>
                  <Datetime 
                  value={bday}
                  ///onChange={handlerdate}
                  
                  inputProps={{
                    type: "email",
                    onChange: (e) => setbday(e.target.value),
                    placeholder: "Date Of Birth" }
                
                } />
                </FormControl>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="CNIC"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setcnic(e.target.value),
                   
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
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setquli(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setrelegion(e.target.value),
                   
                  }}
                />
              </GridItem>
            </GridContainer>
            <br />
            <br />
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default">Back</Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={perNext}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
        <Tab eventKey="upload" title="Upload">
          <div style={{ color: "black" }}>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <h2>
                  {" "}
                  <h2>Applicant’s documents</h2>
                </h2>
                <p className={classes.textCenter}>
                  Must be a forward‑facing, centered photo including the
                  driver’s full face and top of shoulders, with no sunglasses.
                  Must be a photo only of the applicant with no other subject in
                  the frame, well‑lit, and in focus. It cannot be an applicant’s
                  CNIC photo or other printed photograph
                </p>
                <Input type="file" name="file" id="exampleFile" onChange={onChangeHandler} />
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <h2>Applicant’s documents</h2>
                <p>
                  A valid National ID Card (Front & Back). Also a Valid CNIC of
                  one of the parent.
                </p>
                <Input type="file" name="file1" id="exampleFile" onChange={onChangeHandler1}  />
              </GridItem>
            </GridContainer>

            <br />
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={UpBack}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={Upnext}>
                  Next
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
        <Tab eventKey="bank" title="Bank Info">
          <div>
            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Bank Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (e) => setbankname(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setbranchname(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setbankcity(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setaccountname(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => settype(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setaccountno(e.target.value),
                   
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
                  inputProps={{
                    type: "email",
                    onChange: (e) => setibn(e.target.value),
                   
                  }}
                />
              </GridItem>
            </GridContainer>

            <GridContainer className="inputs">
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="default" onClick={BankBack}>
                  Back
                </Button>
              </GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}></GridItem>

              <GridItem xs={12} sm={4} md={4} lg={3}>
                <Button color="info" onClick={getalldata}>Next</Button>
              </GridItem>
            </GridContainer>
          </div>
        </Tab>
      </Tabs>
      <br />
      <br />
    </div>
  );
}
