/*eslint-disable*/
import React, { useState, useEffect } from 'react';

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
const fs=require("fs");
const useStyles = makeStyles(styles);

export default  function HeaderLinks(props) {
  const [userName, setUsername] = useState("");
  const [number, setnumber] = useState("");
  const classes = useStyles();


var  email='';
  
 



  async function fetchMyAPI() {

    console.log(window.location.pathname)
    console.log('fffffffffffffff'); 
    var parts = window.location.pathname.split('/');
var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

console.log(lastSegment);
const response= await fetch("https://darzieverywhere.herokuapp.com/api/users/getprofile", {
  method: "post",
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  body: `id=${lastSegment}`,
});
const json=await response.json();

console.log(json);

  

email=json.number;
setUsername(json.username);
setnumber(json.number);
  }





  useEffect(() => {
    
      fetchMyAPI();
     
    
  
  }, []);
  







  return (

    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Your Profile"
          onclick="fetchMyAPI()"
          buttonProps={{
            onChange: (e) => fetchMyAPI(),
            className: classes.navLink,
            color: "transparent",
          }}
          
          buttonIcon={Apps}
          dropdownList={[
            <Link to="" className={classes.dropdownLink}>
         {userName}
            </Link>,
            <a href="" target="_blank" className={classes.dropdownLink}>
      {number}
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          className={classes.navLink}
        >
          About us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          className={classes.navLink}
        >
          Track Your Order
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          className={classes.navLink}
        >
          Request a Call Back
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="transparent"
          className={classes.navLink}
        >
          Join us
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
