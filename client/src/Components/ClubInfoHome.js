import React, { Component } from "react";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import logo from "./../assets/images/club_logo.jpeg";
import RecentResults from "./RecentResults";
/*
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"; 
*/

const ClubInfoHome = ({ stats }) => {
  const [data, setData] = useState({});

  const callAPI = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Referer", "https://www.ea.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      "http://localhost:9000/getAPIResponse/seasonalStats",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[0]);
      });
  };

  console.log("data:", data);
  console.log("recent results:", data.recentResults);
  useEffect(() => callAPI(), []);
  const marks = [
    {
      value: 0,
      label: 0,
    },
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
    {
      value: 8,
      label: 8,
    },
    {
      value: 9,
      label: 9,
    },
    {
      value: 10,
      label: 10,
    },
  ];
  return (
    <div className="wrapper">
      <div className="flex-row">
        <img src={logo} alt="logo" style={{ display: "block" }} />
        <div className="logo-text">
          <h1 className="left-heading"> Club Info</h1>
          <h4 className="left-heading">
            Current division: {data.currentDivision}
          </h4>
          <h4 className="left-heading">Titles won: {data.recentResults}</h4>
          <h4 className="left-heading">
            Record:
            {data.recentResults && <RecentResults form={data.recentResults} />}
          </h4>
        </div>
        <div></div>
      </div>

      <div className="body">
        <div className="records flex-row evenly">
          <div className="season current-season">
            <h4>Current Season</h4>
            <img
              className="division-logo"
              src={
                "https://media.contentapi.ea.com/content/dam/eacom/fifa/pro-clubs/divisioncrest9.png"
              }
              alt="(division logo here)"
            ></img>
            {/*`${data.points}`*/}
            {data.points && (
              <Slider
                disabled
                defaultValue={data.points}
                max={10}
                size="medium"
                aria-label={8}
                marks={[{ value: data.points, label: data.points }]}
                sx={{
                  width: "60%",
                  color: "black",
                  left: "-5%;",
                }}
              />
            )}
            <p> Division progress </p>
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
