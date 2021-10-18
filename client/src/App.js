import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Landing from "./Landing";
import ClubInfoHome from "./Components/ClubInfoHome";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const [memberStats, setMemberStats] = useState({});
  const [clubInfo, setClubInfo] = useState({});
  const [seasonalStats, setSeasonalStats] = useState({});

  const callAPI = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Referer", "https://www.ea.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    /*  await fetch(
      "http://localhost:9000/getAPIResponse/memberStats", //TODO change endpoint
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setMemberStats({ memberStats: res });
      });

    await fetch(
      "http://localhost:9000/getAPIResponse/clubInfo", //TODO change endpoint
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setClubInfo({ clubInfo: res });
      });
 */
    await fetch(
      "http://localhost:9000/getAPIResponse/seasonalStats",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setSeasonalStats({ seasonalStats: res[0] });
      });

    //return apiResponse;
  };
  //useEffect(() => callAPI(), []);

  return (
    <Router>
      <main>
        <Header />
        <Navbar />
      </main>

      <Switch>
        <Route path="/clubinfo">
          <ClubInfoHome stats={seasonalStats} />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
