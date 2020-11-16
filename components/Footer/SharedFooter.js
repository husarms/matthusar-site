/* eslint-disable */
import React from "react";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Footer from "components/Footer/Footer.js";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

export default function SharedFooter(props) {
  const { classes } = props;
  return (
    <Footer
      content={
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/?ref=njsmkp-blog-posts"
                  target="_blank"
                  className={classes.block}
                >
                  Matt Husar
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a href="https://www.linkedin.com/in/matthusar" target="_blank">
              Matt Husar
            </a>{" "}
          </div>
        </div>
      }
    />
  );
}
