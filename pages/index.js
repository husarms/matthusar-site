/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SharedFooter from "components/Footer/SharedFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionInterested from "pages-sections/index/SectionInterested.js";

import blogPostsPageStyle from "assets/jss/nextjs-material-kit-pro/pages/examples/blogPostsPageStyle.js";

const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Matt Husar"
        links={<HeaderLinks dropdownHoverColor="info" />}
        absolute
        color="transparent"
      />
      <Parallax image={require("assets/img/japan/tokyo-bg.jpg")} filter="extraDark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                We Traveled the World and Elsewhere.
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionInterested />
        </div>
      </div>
      <SharedFooter />
    </div>
  );
}
