import React from "react";
import Card from "../UI/Card";
import classesSame from "../HeroOne/HeroOne.module.css";
import Buttons from "../buttons/Buttons";
import classes from "./HeroFour.module.css";

function HeroFour() {
  const title = "Clipboard for iOS and Mac OS";
  const para =
    "Available for free on the App Store. Downlaod for Mac or iOS, sync with iCLoud and you are ready to start adding to your clipboard";
  return (
    <Card>
      <div className={classesSame.title}>{title}</div>
      <div className={classesSame.para}>{para}</div>
      <div className={classes.btns}>
        <Buttons />
      </div>
    </Card>
  );
}

export default HeroFour;
