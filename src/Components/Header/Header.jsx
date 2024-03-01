import React from "react";
import BizClass from "./Header.module.scss";

const Header = () => {
  return (
    <div className={BizClass.Header}>
      <img
        elementtiming="nbf-header-logo-desktop"
        src="//images.squarespace-cdn.com/content/v1/655e1faf44ab605bebc8e824/9f54faaf-0a7b-4297-b3f8-db759e5cc7f8/New+Logo+Circle+Yellow.png?format=1500w"
        alt="High Vibrations Energy Healing"
      />
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Activations</li>
      </ul>
      <button>Work With Me</button>
    </div>
  );
};

export default Header;
