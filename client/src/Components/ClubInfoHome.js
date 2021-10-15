import React, { Component } from "react";
/* import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"; */
import logo from "./../assets/images/club_logo.jpeg";

const ClubInfoHome = ({ memberStats, clubInfo, seasonalStats }) => {
  //const titlesWon = seasonalStats[0].titlesWon;
  //console.log(seasonalStats[0]["titlesWon"]);

  return (
    <div className="wrapper">
      <div className="flex-row">
        <img src={logo} alt="logo" style={{ display: "block" }} />
        <div className="logo-text">
          <h1 className="left-heading"> Club Info</h1>
          <h4 className="left-heading">Titles won: {}</h4>
          <h4 className="left-heading">Record: {/*record*/}</h4>
        </div>
        <div></div>
      </div>

      <div className="body">
        <div className="records flex-row evenly">
          <div className="season current-season">
            <h4>Current Season</h4>
            <img src="" alt="(division logo here)"></img>
            <p>(League points bar here)</p>
          </div>
          <div className="season all-seasons">
            <h4>All Seasons</h4>
            <img src="" alt="(division logo here)"></img>
            <p>(League points bar here)</p>
          </div>
          <div className="season best-seasons">
            <h4>Best Season</h4>
            <img src="" alt="(division logo here)"></img>
            <p>(League points bar here)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoHome;
