import React, { Component } from "react";
import { useState, useEffect } from "react";
const id = 0;
const RecentResults = ({ form }) => {
  console.log("form: ", form);
  return (
    <div className="matchForm">
      {form.map((match, index) => {
        if (match == "losses") {
          return (
            <p className="loss" key={index}>
              L
            </p>
          );
        } else if (match == "wins") {
          return (
            <p className="win" key={index}>
              W
            </p>
          );
        } else {
          return (
            <p className="tie" key={index}>
              D
            </p>
          );
        }
      })}
    </div>
  );
};

export default RecentResults;
