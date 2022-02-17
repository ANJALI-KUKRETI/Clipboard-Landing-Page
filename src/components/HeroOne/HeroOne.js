import React from "react";
import Card from "../UI/Card";
import Features from "./Features";
import classes from "./HeroOne.module.css";
import Image from "./Image";

function HeroOne() {
  const title = "Keep track of your snippets";
  const para =
    "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything";
  return (
    <div className="heroOne">
      <Card>
        <div className={`${classes.title} ${classes.innerItems}`}>{title}</div>
        <div className={`${classes.para} ${classes.innerItems}`}>{para}</div>
      </Card>
      <div className={classes.mainSec}>
        <Image />
        <div className="features">
          <Features
            title="Quick Search"
            para="Easily search your snippets by content, category, web address, application, and more"
          />
          <Features
            title="iCloud Sync"
            para="Instantly saves and syncs snippets across all your devices."
          />
          <Features
            title="Complete History"
            para=" Retrieve any snippets from the first moment you started using the app."
          />
        </div>
      </div>
    </div>
  );
}

export default HeroOne;
