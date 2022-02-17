import React from "react";
import classes from "./Companies.module.css";
import google from "../../images/logo-google.png";
import ibm from "../../images/logo-ibm.png";
import microsoft from "../../images/logo-microsoft.png";
import hp from "../../images/logo-hp.png";
import vector from "../../images/logo-vector-graphics.png";

function Companies() {
  return (
    <div className={classes.companies}>
      <img src={google} alt="imgs" />
      <img src={ibm} alt="imgs" />
      <img src={microsoft} alt="imgs" />
      <img src={hp} alt="imgs" />
      <img src={vector} alt="imgs" />
    </div>
  );
}

export default Companies;
