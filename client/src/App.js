import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Landing from "./Landing";
import ClubInfoHome from "./Components/ClubInfoHome";
import Fixtures from "./Components/Fixtures";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// eslint-disable-next-line
function App() {
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
      "http://localhost:9000/getAPIResponse/seasonalStats",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        setSeasonalStats({ seasonalStats: res[0] });
      });
  };
  useEffect(() => callAPI(), []);

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
        <Route path="/fixtures">
          {seasonalStats && <Fixtures stats={seasonalStats} />}
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
