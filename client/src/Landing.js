// eslint-disable-next-line
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faVideo,
  faInfoCircle,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="wrapper">
      <div className="greeting">
        <h1>Welcome to the official website of Azerbaijan FC</h1>
        <h5>Here you will find:</h5>

        <Container fluid>
          <Row>
            <Col md={3}>
              <FontAwesomeIcon icon={faInfoCircle} />
              <Link to="/clubinfo">
                <h4>Club Info and Stats</h4>
              </Link>
              <p>
                General information about the club, as well in-depth stats for
                each player. Compare players with ease using our compare tools
                (coming soon).
              </p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faCalendarAlt} />
              <Link to="/fixtures">
                <h4>Latest Results</h4>
              </Link>
              <p>
                Couldn't catch the last game? View the results of the latest
                fixtures, goalscorers and match stats.{" "}
              </p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faVideo} />
              <h4>Highlight Reels</h4>
              <p>
                The best moments of FC Gaguli captured and brought to you via
                YouTube.
              </p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faHistory} />
              <h4>History</h4>
              <p>Get to know the history of our club. </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
