import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import axios from "axios";
import "./style.scss";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let handleInactive = () => {
    if (email.length < 1 || password.length < 1) {
      return true;
    }
    return false;
  };
  let navigate = useNavigate();
  const mutation = useMutation(async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/account/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  });
  React.useEffect(() => {
    if (mutation.data && mutation.isSuccess) {
      alert("Login Successful");
      navigate("/home");
      localStorage.setItem("token", mutation.data.token);
    }
  }, [mutation.data, mutation.isSuccess, navigate]);
  return (
    <div className="login">
      <h2>Login</h2>
      <p style={{paddingTop:"15px"}}>Login to your account</p>

      <form>
        <Input label={"Email"} control={{ value: email, setValue: setEmail }} type={email}/>
        <Input
          label={"Password"}
          type={"password"}
          control={{ value: password, setValue: setPassword }}
        />


        <div className="button-wrapper">
          <Button
            title={"Login"}
            className={"sec"}
            inactive={handleInactive()}
            onClick={(e: any) => {
              e.preventDefault();
              mutation.mutate();
            }}
          />
        </div>
        {mutation.isSuccess ? <p>User Created!</p> : <p></p>}
        {/* {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null} */}
      </form>
      <p className="bottom-account">
        Already have an account <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
