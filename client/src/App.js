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
  const [stats, setStats] = useState({});

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

    await fetch(
      "http://localhost:9000/getAPIResponse/memberStats", //TODO figure this out
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setMemberStats({ memberStats: res });
      });

    await fetch(
      "http://localhost:9000/getAPIResponse/clubInfo", //TODO figure this out
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setClubInfo({ clubInfo: res });
      });

    await fetch(
      "http://localhost:9000/getAPIResponse/seasonalStats", //TODO figure this out
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        //console.log(`res: ${res}`);
        console.log("seasonalStats", res);
        const seasonalStats = res[0];
        for (const [key, value] of Object.entries(seasonalStats)) {
          console.log(`${key}: ${value}`);
        }
        setSeasonalStats({ seasonalStats: res });
      });

    //return apiResponse;
  };
  //console.log("memberStats", memberStats);
  useEffect(() => callAPI(), []);

  return (
    <Router>
      <main>
        <Header />
        <Navbar />
        {/*<Landing />*/}
        <ClubInfoHome
          memberStats={memberStats}
          clubInfo={clubInfo}
          seasonalStats={seasonalStats}
        />
        {/*<Link to="/clubinfo">ClubInfo</Link>*/}
      </main>

      {/*<Switch>
        <Route path="/clubinfo">
          <ClubInfoHome />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>*/}
    </Router>
  );
}

export default App;
