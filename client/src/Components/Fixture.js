import React, { Component } from "react";
import logo from "./../assets/images/club_logo.jpeg";
// src="https://fifa21.content.easports.com/fifa/fltOnlineAssets/05772199-716f-417d-9fe0-988fa9899c4d/2021/fifaweb/crests/256x256/l99060315.png"
const Fixture = ({ opponent }) => {
  return (
    <div className="fixture">
      <div className="flex-row-element">
        <img src={logo} width={"100px"} height={"100px"} />
      </div>
      <div className="score">
        <p>Azerbaijan FC- {opponent}</p>
      </div>
      <div>
        <img
          src={`https://fifa21.content.easports.com/fifa/fltOnlineAssets/05772199-716f-417d-9fe0-988fa9899c4d/2021/fifaweb/crests/256x256/${opponent}.png`}
          width={"100px"}
          height={"100px"}
        />
      </div>
    </div>
  );
};

export default Fixture;
