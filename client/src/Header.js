import React from "react";
import logo from "./assets/images/club_logo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      {/*<h2>Gaguli FC</h2>*/}
    </div>
  );
};

export default Header;
