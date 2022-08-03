import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      Login
      <p className="bottom-account">
        Already have an account <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
