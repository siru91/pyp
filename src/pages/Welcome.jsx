import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="contents">
          <h1>Pyoeng</h1>
          <div className="link-container">
            <Link to="./About" className="menu-btn" id="link-about">
              About
            </Link>
            <a
              className="menu-btn"
              id="link-works"
              onClick={function (e) {
                console.log(e.target);
              }.bind(this)}
            >
              Works
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
