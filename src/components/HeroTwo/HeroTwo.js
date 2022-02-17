import React from "react";
import Card from "../UI/Card";
import classes from "./HeroTwo.module.css";
import classesSame from "../HeroOne/HeroOne.module.css";

import image from "../../images/image-devices.png";

function HeroTwo() {
  const title = "Access Clipboard anywhere";
  const para =
    "Whether you are on the go, or at your computer, you can access all your clipboard snippets in a few simple clicks";
  return (
    <div className={classes.heroTwo}>
      <Card>
        <div className={classesSame.title}>{title}</div>
        <div className={classesSame.para}>{para}</div>
      </Card>
      <div className={classes.device}>
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default HeroTwo;
