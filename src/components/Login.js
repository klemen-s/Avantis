import Input from "./Input";
import "./Login.css";

import axios from "axios";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginDispatchContext } from "../context/LoginContext";

function Login() {
  const navigate = useNavigate();

  const url = "http://localhost:8000/login";
  const dispatchUser = useContext(LoginDispatchContext);

  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");


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

        navigate("/home");
      })
      .catch((err) => {
        if (err.response.data.emailError) {
          setIsEmailCorrect(false);
          setEmailErrorMessage(err.response.data.emailError);
          return;
        }

        setIsEmailCorrect(true);
        setEmailErrorMessage("");

        if (err.response.data.passwordError) {
          setIsPasswordCorrect(false);
          setPasswordErrorMessage(err.response.data.passwordError);
          return;
        }

        setIsPasswordCorrect(true);
        setPasswordErrorMessage("");
      });
  };

  return (
    <>
      <Input
        configuration={{
          type: "text",
          text: "E-Mail",
          isCorrect: isEmailCorrect,
          errorMessage: !isEmailCorrect ? emailErrorMessage : "",
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
