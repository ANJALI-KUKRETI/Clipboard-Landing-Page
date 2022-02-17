import React from "react";
import classes from "./Footer.module.css";
import logo from "../../images/logo.svg";
import fb from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import insta from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.elements}>
        <div className={classes.logo}>
          <img src={logo} alt="" />
        </div>
        <div>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p>Press Kit</p>
        </div>
        <div>
          <p>Install Guide</p>
        </div>
        <div className={classes.logos}>
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
