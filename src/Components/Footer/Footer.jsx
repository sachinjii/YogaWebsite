import React from "react";
import BizClass from "./Footer.module.scss";
import { Link } from "react-router-dom";
// import { Link } from "react-router";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={BizClass.Section_Footer}>
      <div className={BizClass.BackGround_Img}>
        <img
          src="	https://sherbazaar.co/wp-content/uploads/2022/06/eimap-1.png"
          alt="--"
        />
      </div>
      <div className={BizClass.Footer}>
        <div className={BizClass.Links}>
          <a
            className={BizClass.FooterLink}
            to="/refund-policy"
            target="_blank"
          >
            Embrace Your Bliss 90-Day Program
          </a>
          <a
            className={BizClass.FooterLink}
            to="/terms-and-conditions"
            target="_blank"
          >
            Reiki Certification Training
          </a>
          <a
            className={BizClass.FooterLink}
            to="/fair-play-policy"
            target="_blank"
          >
            Workshops
          </a>

          <a className={BizClass.FooterLink} to="/tds-policy" target="_blank">
            Reiki Healing, Reading, and Integration Session
          </a>
          <a
            className={BizClass.FooterLink}
            to="/privacy-policy"
            target="_blank"
          >
            Infinite Possibility Call
          </a>
          <a className={BizClass.FooterLink} target="_blank">
            Learn Free Kundalini Meditations
          </a>
          <a className={BizClass.FooterLink} target="_blank">
            Shamballa Activations
          </a>
          <a className={BizClass.FooterLink} target="_blank">
            Contact
          </a>

          <a className={BizClass.FooterLink} target="_blank">
            Shamballa Reiki Certification Training
          </a>
          <a className={BizClass.FooterLink} target="_blank">
            Akashic Record Healing
          </a>
        </div>
        <p>
          Rebecca Schaffer offers Shamballa Reiki Healing, Kundalini Yoga,
          Meditation, and Energy Healing in the South Florida area and
          virtually.
        </p>
      </div>

      <div className={BizClass.Base}>
        {" "}
        <span className={BizClass.FooterLink}>© 2024 Copyright includes</span>
      </div>
    </div>
  );
};

export default Footer;
