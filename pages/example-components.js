import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/components/SectionBasics.js";
import SectionNavbars from "pages-sections/components/SectionNavbars.js";
import SectionTabs from "pages-sections/components/SectionTabs.js";
import SectionPills from "pages-sections/components/SectionPills.js";
import SectionNotifications from "pages-sections/components/SectionNotifications.js";
import SectionTypography from "pages-sections/components/SectionTypography.js";
import SectionJavascript from "pages-sections/components/SectionJavascript.js";
import SectionCarousel from "pages-sections/components/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/components/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/components/SectionLogin.js";
import SectionExamples from "pages-sections/components/SectionExamples.js";
import SectionDownload from "pages-sections/components/SectionDownload.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function ExampleComponents(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Matt Husar"
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
        {...rest}
      />
      <Parallax image={require("assets/img/travel/thailand-1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>We Traveled the World</h1>
                <h3 className={classes.subtitle}>
                  And Elsewhere
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}
