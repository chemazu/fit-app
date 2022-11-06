import React from "react";
import ForYouCard from "./components/ForYouCard";
import TodayRoutine from "./components/TodayRoutine";
import WeeklyRoutine from "./components/WeeklyRoutine";
import "./sub-style.scss";

export default function HomePage() {
  return (
    <div className="mini-home">
      <div className="top-div">
        <p className="user-initals">CC</p>
      </div>
      <p className="heading-item">Today's Routine</p>
      <TodayRoutine />
      <p className="heading-item">Weekly Routine</p>
      <WeeklyRoutine />

      {/* <p className="heading-item">For you</p>
      <div className="for-you-card-wrapper">
        <ForYouCard />
        <ForYouCard />
        <ForYouCard />
        
      </div> */}

      <div className="start-container">
        <h2>START</h2>
      </div>
    </div>
  );
}
