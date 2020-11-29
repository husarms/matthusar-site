/* eslint-disable */
import React from "react";
import classNames from "classnames";
// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit-pro/components/sharedFooterStyle.js";

const useStyles = makeStyles(styles);

export default function SharedFooter() {
  const classes = useStyles();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div>
          <a href="/" className={classes.footerBrand}>
            Matt Husar
          </a>
        </div>
        <div>
          <Button className={classes.navButton} onClick={scrollToTop}>
            Back to Top
          </Button>
        </div>
        <div>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="https://www.instagram.com/matthusar/"
                target="_blank"
                className={classes.buttonInstagram}
              >
                <i
                  className={classNames(
                    classes.iconSocial,
                    "fab",
                    "fa-instagram"
                  )}
                />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://github.com/husarms"
                target="_blank"
                className={classes.buttonGitHub}
              >
                <i
                  className={classNames(classes.iconSocial, "fab", "fa-github")}
                />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="https://www.linkedin.com/in/matthusar/"
                target="_blank"
                className={classes.buttonLinkedIn}
              >
                <i
                  className={classNames(
                    classes.iconSocial,
                    "fab",
                    "fa-linkedin"
                  )}
                />
              </Button>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}
