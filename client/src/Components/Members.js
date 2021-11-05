import React, { Component } from "react";
import { useState, useEffect } from "react";
import Member from "./Member";

const Members = () => {
  const [memberStats, setMemberStats] = useState([]);
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
        setMemberStats(res.members);
        setPositions(res.positionCount);
      });
  };
  console.log("memberStats:", memberStats);
  console.log("positions:", positions);
  useEffect(() => getStats(), []);
  console.log("memberStats:", memberStats);
  console.log("positions:", positions);
  return (
    <div className="flex-column">
      <h3 className="left-heading">Members</h3>
      <div className="rows-columns">
        {memberStats != {} &&
          positions != {} &&
          memberStats.map((member, index) => <Member stats={member} />)}
      </div>
    </div>
  );
};
// memberStats.map((member, index) => <h1>{member.name}</h1>)
{
  /* <div className="flex-column">
      <h3 className="left-heading">Members</h3>
      <div className="rows-columns">
        {memberStats != {} &&
          positions != {} &&
          memberStats.map((member, index) => (
            <div className="member">
              <h4>{member.name}</h4>
              <p>Goals: {member.goals}</p>
              <p>Assists: {member.assists}</p>
            </div>
          ))}
      </div>
    </div> */
}
export default Members;
