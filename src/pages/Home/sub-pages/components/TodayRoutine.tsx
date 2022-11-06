import React from "react";
import squat from "../../../../assets/img/bench.svg";
import "./TodayRoutine.scss";
export default function TodayRoutine() {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="today-routine">
      <img src={squat} alt="squat" />
      <div className="content">
        <div className="date">
          <p>Today{"  "}{months[date.getMonth()]} {date.getDay()}
          </p>
        </div>
        <div className="top-set">
          <h2>Barbell Back Squat</h2>
            <p>3 sets of 5 reps : 110kg</p>
        </div>
      </div>
    </div>
  );
}
