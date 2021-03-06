import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import examplesStyle from "assets/jss/nextjs-material-kit-pro/pages/examples/presentationSections/examplesStyle.js";
import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";

import exAboutUs from "assets/img/assets-for-demo/example-pages/ex-about-us.jpg";
import exLanding from "assets/img/assets-for-demo/example-pages/ex-landing.jpg";
import exContact from "assets/img/assets-for-demo/example-pages/ex-contact.jpg";
import exBlogPost from "assets/img/assets-for-demo/example-pages/ex-blog-post.jpg";
import exProductPage from "assets/img/assets-for-demo/example-pages/ex-product.jpg";
import exLoginPage from "assets/img/assets-for-demo/example-pages/ex-login.jpg";
import exPricing from "assets/img/assets-for-demo/example-pages/ex-pricing.jpg";
import exSignup from "assets/img/assets-for-demo/example-pages/ex-register.jpg";
import exProfile from "assets/img/assets-for-demo/example-pages/ex-profile.jpg";
import exBlog from "assets/img/assets-for-demo/example-pages/ex-blog-posts.jpg";

const styles = {
  ...examplesStyle,
  ...imagesStyles
};

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <div className={classes.sectionDescription}>
            <h2 className={classes.title}>Example Pages</h2>
            <h5 className={classes.description}>
              The easiest way to get started is to use one of our pre-built
              example pages. From landing pages to e-commerce or blog pages, you
              will be able jump start your development. Show your clients a
              quick prototype and get inspired for your next project!
            </h5>
          </div>
        </GridItem>
        <GridContainer>
          <GridItem md={4} sm={4} xs={12}>
            <h4 className={classes.title}>About Us</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/about-us"}>
                <img
                  src={exAboutUs}
                  alt="About us"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Landing Page</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/landing-page"}>
                <img
                  src={exLanding}
                  alt="Landing Page"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Contact Us</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/contact-us"}>
                <img
                  src={exContact}
                  alt="Contact us"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4} xs={12}>
            <h4 className={classes.title}>Blog Post</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/blog-post"}>
                <img
                  src={exBlogPost}
                  alt="Blog Post"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Product Page</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/product"}>
                <img
                  src={exProductPage}
                  alt="Product Pge"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Login Page</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/login"}>
                <img
                  src={exLoginPage}
                  alt="Login Page"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4} xs={12}>
            <h4 className={classes.title}>Pricing Pge</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/pricing"}>
                <img
                  src={exPricing}
                  alt="Pricing Page"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Signup Page</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/signup"}>
                <img
                  src={exSignup}
                  alt="Signup Page"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Profile Page</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/profile"}>
                <img
                  src={exProfile}
                  alt="Profile Page"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Blog Posts</h4>
            <Card className={classes.imgCardExtended}>
              <Link href={"/blog-posts"}>
                <img
                  src={exBlog}
                  alt="Blog Posts"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
