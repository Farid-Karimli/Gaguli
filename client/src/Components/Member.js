import React, { Component } from "react";
import { useState, useEffect } from "react";

const Member = ({ stats }) => {
  return (
    <div className="member">
      <h4>{stats.name}</h4>
      <p>Position: {stats.favoritePosition}</p>
      <p>Goals: {stats.goals}</p>
      <p>Assists: {stats.assists}</p>
    </div>
  );
};

export default Member;
