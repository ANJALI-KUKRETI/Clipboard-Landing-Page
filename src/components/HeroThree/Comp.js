import React from "react";
import classes from "./Comp.module.css";
import classesSame from "../HeroOne/Features.module.css";

function Comp(props) {
  return (
    <div className={classes.card}>
      <div>
        <img src={props.head} alt="icon" />
      </div>
      <div className={classesSame.title}>{props.title}</div>
      <div className={classesSame.para}>{props.para}</div>
    </div>
  );
}

export default Comp;
