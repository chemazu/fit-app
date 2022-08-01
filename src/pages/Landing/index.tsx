import React from "react";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

export default function Landing() {
  let navigate = useNavigate();
  return (
    <div className="landing">
      <div className="top">
        <div className="logo-wrapper">
          <Logo className="pry-logo" />
        </div>
        <div className="mid-content">
          <h1>
            Solutions for an active <br />
            lifestyle
          </h1>
          <p>
            {process.env.REACT_APP_APP_NAME} is the best way to stay consistent
            and track you fitness progress
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
          <p>
            Already have an account <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
