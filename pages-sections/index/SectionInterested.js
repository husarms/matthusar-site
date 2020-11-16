import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import osaka from "assets/img/japan/osaka-1.jpg";
import tokyo from "assets/img/japan/tokyo-4.jpg";
import thailand from "assets/img/thailand/thailand-1.jpg";
import cambodia from "assets/img/cambodia/cambodia-3.jpg";

import sectionInterestedStyle from "assets/jss/nextjs-material-kit-pro/pages/examples/blogPostsSections/sectionInterestedStyle.js";

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionInterested() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader image plain>
              <a href="/tokyo">
                <img src={tokyo} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + tokyo + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="/tokyo">
                  Tokyo
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="/tokyo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={osaka} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + osaka + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Osaka
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={thailand} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + thailand + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Thailand
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={cambodia} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + cambodia + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Cambodia
                </a>
              </h4>
              <p className={classes.description}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
