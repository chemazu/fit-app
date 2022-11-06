import React from "react";
import squat from "../../../../assets/img/bench.svg";
import "./WeeklyRoutine.scss";

export default function WeeklyRoutine() {
  return (
    // <div className="weekly-routine">
    //   <div className="heading">
    //     <p>Date</p>
    //     <p></p>
    //     <p>Exercise</p>
    //     <p>Top Set</p>
    //   </div>

    //   <div className="body-wrapper">

    //   </div>
    // </div>
    <table className="weekly-routine-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>pic</th>
          <th>Exercise</th>
          <th>Top Set</th>
        </tr>
      </thead>
      <tbody>

      <BodyLine />
        <BodyLine />
        <BodyLine />
      </tbody>
    </table>
  );
}

const BodyLine = () => {
  return (
    <tr className="body">
      <td>Date</td>
      <td>
        <img src={squat} alt="squat" />
      </td>

      <td>Bench Press</td>
      <td>3 x 5 reps : 110kg</td>
    </tr>
  );
};
