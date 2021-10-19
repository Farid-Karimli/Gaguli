import React, { Component } from "react";
import { useState, useEffect } from "react";

const Member = ({ player }) => {
  const [playerStats, setPlayer] = useState(player);

  return (
    <div>
      <h3> {player && player.name} </h3>
    </div>
  );
};

export default Member;
