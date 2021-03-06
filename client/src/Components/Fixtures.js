import React from "react";
import { useState, useEffect } from "react";
import Fixture from "./Fixture";
const Fixtures = ({ stats }) => {
  const [opponents, setOpp] = useState(stats.seasonalStats);

  const getClubName = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Referer", "https://www.ea.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`http://localhost:9000/getAPIResponse/clubInfo/${id}`, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log("Res:", res);
        if (res.id == null) {
          return "Error";
        }

        return res[id].name;
      });
  };
  const keys = [
    "lastOpponent0",
    "lastOpponent1",
    "lastOpponent2",
    "lastOpponent3",
    "lastOpponent4",
    "lastOpponent5",
    "lastOpponent6",
    "lastOpponent7",
    "lastOpponent8",
    "lastOpponent9",
  ];

  const getClubNames =  () => {
    var clubNames = []
    clubNames = keys.map(async(key) => {
      if (opponents[key] !== "-1") {
        var clubName = getClubName(opponents[key]);
        if (clubName == "Error") {
          clubName = "Disbanded";
        }
        console.log("clubName:", clubName);
        return clubName
  }


  console.log("opponents:", opponents);
  return (
    <div className="wrapper">
      <h1>Latest Results: </h1>
      {opponents &&
        keys.map((key) => {
          if (opponents[key] !== "-1") {
            var clubName = getClubName(opponents[key]);
            if (clubName == "Error") {
              clubName = "Disbanded";
            }
            console.log("clubName:", clubName);
            return <Fixture opponent={clubName} />;
          }
        })}
    </div>
  );
};

export default Fixtures;
