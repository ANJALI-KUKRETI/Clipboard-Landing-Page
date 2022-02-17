import React from "react";
import classes from "./Features.module.css";

function Features(props) {
  return (
    <div className={classes.feature}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.para}>{props.para}</div>
    </div>
  );
}

export default Features;
