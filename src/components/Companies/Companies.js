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
      <img src={google} alt="" srcset="" />
      <img src={ibm} alt="" srcset="" />
      <img src={microsoft} alt="" srcset="" />
      <img src={hp} alt="" srcset="" />
      <img src={vector} alt="" srcset="" />
    </div>
  );
}

export default Companies;
