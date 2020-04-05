import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import { SectionCarousel } from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/Components/Sections/SectionCarousel.js";
import SectionCard from "C:/Users/abbas/Documents/GitHub/darziweb/src/views/Components/Sections/SectionCards.js";
import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />

      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
        <center>
          <div className={classes.container} style={{ justify: "center" }}>
            <Button
              href="#pablo"
              className={classes.registerNavLink}
              onClick={(e) => e.preventDefault()}
              color="rose"
              style={{ fontSize: "30px" }}
            >
              Call a Darzi
            </Button>
            <br />
            <Button
              href="#pablo"
              className={classes.registerNavLink}
              onClick={(e) => e.preventDefault()}
              color="rose"
              style={{ fontSize: "30px" }}
            >
              Call a Designer
            </Button>

            <br />
            <br />
          </div>
        </center>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <SectionCard
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={work1}
                title="Clothes"
                text="Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together."
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <SectionCard
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={work1}
                title="Clothes"
                text="Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together."
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <SectionCard
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={work1}
                title="Clothes"
                text="Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together."
              />
            </GridItem>
          </GridContainer>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}
