import React from "react";
import image from "../../images/image-computer.png";
import classes from "./Image.module.css";

function Image() {
  return (
    <div className={classes.image}>
      <img src={image} alt="image" />
    </div>
  );
}

export default Image;
