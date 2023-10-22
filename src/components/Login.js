import Input from "./Input";
import "./Login.css";

import axios from "axios";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LoginDispatchContext } from "../context/LoginContext";

function Login() {
  const url = "http://localhost:8000/login";
  const dispatchUser = useContext(LoginDispatchContext);

  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const loginHandler = () => {
    axios({
      method: "POST",
      data: { email: "test@test.com", password: "123" }, // test login data
      url: url,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("jwt", response.data.jwt);
        dispatchUser({
          type: "login",
          isLoggedIn: true,
          name: response.data.name,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Input
        configuration={{
          type: "text",
          text: "E-Mail",
          isCorrect: isEmailCorrect,
          errorMessage: "Incorrect Email.",
        }}
      />
      <Input
        configuration={{
          type: "password",
          text: "Password",
          isCorrect: isPasswordCorrect,
          errorMessage: "Incorrect Password.",
        }}
      />
      <div className="login-register-btn-container">
        <button className="login-btn" onClick={loginHandler}>
          Sign In
        </button>
        <Link to={"/dashboard/register"}>
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </>
  );
}

export default Login;
