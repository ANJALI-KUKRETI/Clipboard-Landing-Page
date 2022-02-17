import React from "react";
import Card from "../UI/Card";
import Comp from "./Comp";
import blacklist from "../../images/icon-blacklist.svg";
import preview from "../../images/icon-preview.svg";
import text from "../../images/icon-text.svg";

import classes from "./HeroThree.module.css";
import classesSame from "../HeroOne/HeroOne.module.css";

function HeroThree() {
  const title = "Supercharge your workflow";
  const para = "We've got the tools to boost your productivity.";
  return (
    <div className={classes.heroThree}>
      <Card>
        <div className={classesSame.title}>{title}</div>
        <div className={classesSame.para}>{para}</div>
      </Card>
      <div className={classes.comps}>
        <Comp
          head={blacklist}
          title="Create blacklists"
          para="Ensure sensitive information never makes its way to your clipboard by excluding certain sources"
        />
        <Comp
          head={text}
          title="Plain text snippets"
          para="Remove unwanted formatting from copied text for a consistent look."
        />
        <Comp
          head={preview}
          title="Sneak preview"
          para="Quick preview of all snippets on your Clipboard for easy access"
        />
      </div>
    </div>
  );
}

export default HeroThree;
