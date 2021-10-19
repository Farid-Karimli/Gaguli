import React, { Component } from "react";
import { useState, useEffect } from "react";
import Member from "./Member";

const Members = () => {
  const [memberStats, setMemberStats] = useState({});
  const [positions, setPositions] = useState({});

  const getStats = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Referer", "https://www.ea.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      "http://localhost:9000/getAPIResponse/memberStats",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Res:", res);
        setMemberStats(res.members);
        setPositions(res.positionCount);
      });
  };
  useEffect(() => getStats(), []);
  console.log("memberStats:", memberStats);
  console.log("positions:", positions);
  return (
    <div className="flex-row">
      <h3 className="left-heading">Members</h3>
      {memberStats &&
        positions &&
        memberStats.map((member) => {
          return <Member player={member} />;
        })}
    </div>
  );
};

export default Members;
