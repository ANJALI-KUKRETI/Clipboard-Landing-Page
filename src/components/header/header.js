import React from "react";
import classes from "./header.module.css";
import logo from "../../images/logo.svg";
import Buttons from "../buttons/Buttons";
import Card from "../UI/Card";

function header() {
  const title = "  A history of everything you copy";
  const para =
    " Clipboard allows you to track and organize everything you copy.Instantly access your clipboard on all your devices.";

  return (
    <div className={classes.header}>
      <Card>
        <div className={classes.innerItems}>
          <img src={logo} alt="logo" />
        </div>
        <div className={`${classes.title} ${classes.innerItems}`}>{title}</div>
        <div className={`${classes.para} ${classes.innerItems}`}>{para}</div>
        <div className={`${classes.btns} ${classes.innerItems}`}>
          <Buttons />
        </div>
      </Card>
    </div>
  );
}

export default header;
