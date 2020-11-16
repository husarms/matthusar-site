import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
// core components

import osaka1 from "assets/img/japan/osaka-1.jpg";
import osaka2 from "assets/img/japan/osaka-2.jpg";
import osaka3 from "assets/img/japan/osaka-3.jpg";
import osaka4 from "assets/img/japan/osaka-4.jpg";
import osaka5 from "assets/img/japan/osaka-5.jpg";
import osaka6 from "assets/img/japan/osaka-6.jpg";
import tokyo1 from "assets/img/japan/tokyo-1.jpg";
import tokyo2 from "assets/img/japan/tokyo-2.jpg";
import tokyo3 from "assets/img/japan/tokyo-3.jpg";
import tokyo4 from "assets/img/japan/tokyo-4.jpg";
import tokyo5 from "assets/img/japan/tokyo-5.jpg";

import sectionTextStyle from "assets/jss/nextjs-material-kit-pro/pages/examples/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h3 className={classes.title}>
            The Castle Looks Different at Night...
          </h3>
          <p>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more. We are here to make life better.
            <br />
            <br />
            And now I look and look around and there’s so many Kanyes I{"'"}ve
            been trying to figure out the bed design for the master bedroom at
            our Hidden Hills compound... and thank you for turning my personal
            jean jacket into a couture piece.
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“A frog in a well does not know the great sea.”"
            author="井の中の蛙大海を知らず"
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <img src={tokyo1} alt="..." className={imgClasses} />
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <h3 className={classes.title}>I began in Shinjuku</h3>
          <p>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more. We are here to make life better.
            <br />
            <br />
            And now I look and look around and there’s so many Kanyes I{"'"}
            ve been trying to figure out the bed design for the master bedroom
            at our Hidden Hills compound... and thank you for turning my
            personal jean jacket into a couture piece.
          </p>
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <img src={tokyo2} alt="..." className={imgClasses} />
          <h3 className={classes.title}>Street art</h3>
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <img src={tokyo3} alt="..." className={imgClasses} />
        </GridItem>
        <GridItem xs={12} sm={10} md={10}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            We are here to make life better. And now I look and look around and
            there’s so many Kanyes I{"'"}ve been trying to figure out the bed
            design for the master bedroom at our Hidden Hills compound... and
            thank you for turning my personal jean jacket into a couture piece.
            <br />I speak yell scream directly at the old guard on behalf of the
            future. daytime All respect prayers and love to Phife’s family Thank
            you for so much inspiration.
          </p>
          <p>
            Thank you Anna for the invite thank you to the whole Vogue team And
            I love you like Kanye loves Kanye Pand Pand Panda I{"'"}ve been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound...The Pablo pop up was almost a pop up of
            influence. All respect prayers and love to Phife’s family Thank you
            for so much inspiration daytime I love this new Ferg album! The Life
            of Pablo is now available for purchase I have a dream. Thank you to
            everybody who made The Life of Pablo the number 1 album in the
            world! I{"'"}m so proud of the nr #1 song in the country. Panda!
            Good music 2016!
          </p>
          <p>
            I love this new Ferg album! The Life of Pablo is now available for
            purchase I have a dream. Thank you to everybody who made The Life of
            Pablo the number 1 album in the world! I{"'"}m so proud of the nr #1
            song in the country. Panda! Good music 2016!
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
