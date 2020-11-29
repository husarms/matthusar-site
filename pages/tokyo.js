/*eslint-disable*/ import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import SharedFooter from "components/Footer/SharedFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionText from "pages-sections/japan/SectionText.js";

import blogPostPageStyle from "assets/jss/nextjs-material-kit-pro/pages/examples/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (e, target) => {
    var isMobile = navigator.userAgent.match(
      /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
    );
    if (isMobile) {
      // if we are on mobile device the scroll into view will be managed by the browser
    } else {
      e.preventDefault();
      var targetScroll = document.getElementById(target);
      const y = targetScroll.getBoundingClientRect().top + window.scrollY;
      scrollGo(document.documentElement, y, 1250);
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Matt Husar"
        links={<HeaderLinks dropdownHoverColor="info" />}
        absolute
        color="transparent"
      />
      <Parallax image={require("assets/img/japan/tokyo-5.jpg")} filter="extraDark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                Return to Japan
              </h1>
              <h4 className={classes.subtitle}>
                Ancient temples and futuristic cities. It's all out there.
              </h4>
              <br />
              <Button color="rose" size="lg" round onClick={e => smoothScroll(e, "article")}>
                <FormatAlignLeft /> Read Article
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <div id="article" />
          <SectionText />
        </div>
      </div>
      <SharedFooter />
    </div>
  );
}
