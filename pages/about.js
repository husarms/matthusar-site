/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SharedFooter from "components/Footer/SharedFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";

import matt from "assets/img/profile/matt-1.jpg";

import profilePageStyle from "assets/jss/nextjs-material-kit-pro/pages/examples/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        brand="Matt Husar"
        links={<HeaderLinks dropdownHoverColor="info" />}
        absolute
        color="transparent"
      />
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={matt} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Matt Husar</h3>
                  <h6>ENGINEER, DIGITAL NOMAD</h6>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/matthusar/",
                        "_blank"
                      )
                    }
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="github"
                    onClick={() =>
                      window.open("https://github.com/husarms", "_blank")
                    }
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-github"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="linkedin"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/matthusar/",
                        "_blank"
                      )
                    }
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              I am a versatile, product-focused software engineer with 10 years
              of experience and a track record delivering business-critical
              experiences and services that are resilient, scalable and
              highly-available.
            </p>
            <p>
              My expertise includes leveraging continuous prototyping, testing,
              and measurement to facilitate discovery and gain user insights to
              iterate products.
            </p>
          </div>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={classNames(classes.gridItem, classes.textCenter)}
            >
              <div className={classes.profileTabs}>
                <h4 className={classes.title}>Skills</h4>
                <Badge color="primary">JavaScript</Badge>
                <Badge color="warning">C#</Badge>
                <Badge color="success">.NET</Badge>
                <Badge color="info">React</Badge>
                <Badge color="rose">Node.js</Badge>
                <Badge color="danger">Azure</Badge>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <SharedFooter />
    </div>
  );
}
