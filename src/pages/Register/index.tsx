import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import axios from "axios";
import "./style.scss";

export default function Register() {
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  let handleInactive = () => {
    if (
      username.length < 1 ||
      email.length < 1 ||
      phone.length < 1 ||
      password.length < 1 ||
      passwordConfirm.length < 1
    ) {
      return true;
    }
    if (password !== passwordConfirm) {
      return true;
    }
    return false;
  };
  let navigate = useNavigate();
  const mutation = useMutation(async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/account/register`,
      {
        username,
        email,
        password,
      }
    );
    return response.data;
  });
  React.useEffect(() => {
    if (mutation.data && mutation.isSuccess) {
      alert("Registration Successful");
      navigate("/home");
      localStorage.setItem("token", mutation.data.token);
    }
  }, [mutation.data, mutation.isSuccess,navigate]);
  return (
    <div className="register">
      <h2>Sign Up</h2>
      <form>
        <Input
          label={"Name"}
          control={{ value: username, setValue: setUserName }}
        />
        <Input label={"Email"} control={{ value: email, setValue: setEmail }} />
        <Input label={"Phone"} control={{ value: phone, setValue: setPhone }} />
        <Input
          label={"Password"}
          type={"password"}
          control={{ value: password, setValue: setPassword }}
        />
        <Input
          label={"Confirm Password"}
          type={"password"}
          control={{ value: passwordConfirm, setValue: setPasswordConfirm }}
        />
        <div className="privacy-div">
          <input type={"checkbox"} />
          <p>By continuing you accept our privacy policy</p>
        </div>

        <div className="button-wrapper">
          <Button
            title={"Sign Up"}
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
        Already have an account <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
