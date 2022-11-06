import React from "react";
import "./style.scss";
import HomePage from "./sub-pages/mini-home";
import setting from "../../assets/img/setting.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <HomePage />
      </div>
      <div className="bottom-menu">
        <div className="icon-container">
          <img
            src={setting}
            alt="settings"
            style={{ transform: "rotate(90deg)" }}
          />
          <p>Programs</p>
        </div>
        <div className="icon-container">
          <img
            src={setting}
            alt="settings"
            style={{ transform: "rotate(90deg)" }}
          />
          <p>Activity</p>
        </div>{" "}
        <div className="icon-container">
          <img
            src={setting}
            alt="settings"
            style={{ transform: "rotate(90deg)" }}
          />
          <p>Home</p>
        </div>{" "}
        <div className="icon-container">
          <img
            src={setting}
            alt="settings"
            style={{ transform: "rotate(90deg)" }}
          />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}
