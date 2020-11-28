import {
  container,
  primaryColor,
  btnLink,
  grayColor,
  blackColor,
  linkedinColor,
  instagramColor,
} from "assets/jss/nextjs-material-kit-pro.js";

const footerStyle = {
  container: {
    width: "100%",
    display: "grid",
    justifyContent: "space-evenly",
    alignContent: "center",
    gridAutoFlow: "column",
    "@media (max-width: 768px)": {
      justifyContent: "center",
      gridAutoFlow: "row",
    },
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none"
    }
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0"
  },
  navButton: {
    padding: "15px 15px",
    color: grayColor[1],
    fontSize: "12px"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative",
    "@media (max-width: 768px)": {
      width: "24px",
      height: "24px",
      minWidth: "24px",
    },
  },
  buttonLinkedIn: {
    ...btnLink,
    color: linkedinColor,
  },
  buttonInstagram: {
    ...btnLink,
    color: instagramColor
  },
  buttonGitHub: {
    ...btnLink,
    color: blackColor
  },
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    color: grayColor[1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
};
export default footerStyle;
