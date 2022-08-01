import React from "react";
import "./style.scss";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
export default function Landing() {
  let navigate = useNavigate();
  return (
    <div className="landing">
      <div className="top">
        <Logo className="pry-logo" />

        <div className="mid-content">
          <h2>Track your training</h2>
          <h2>to monitor progress</h2>
          <p>
            Cadence is the best way to track your training to meet your goals
          </p>
          <div className="button-wrapper">
            <Button
              title="Get Started"
              className="pry"
              onClick={() => {
                navigate("/register");
              }}
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
      </div>
      {/* <div className="bottom">
        <h2>{process.env.REACT_APP_APP_NAME}</h2>
        <p>
          Workout routines that will help you gain strength, get in better shape
          and embrace a healthy lifestyle
        </p>
        <Button title="Get Started" className="pry"/>
        <p>Already have an account login</p>
      </div> */}
    </div>
  );
}
