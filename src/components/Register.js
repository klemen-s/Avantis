import "./Register.css";
import Input from "./Input";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function Register() {
  const url = "http://localhost:8000/register";
  const navigate = useNavigate();

  const [isNameCorrect, setIsNameCorrect] = useState(true);
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setisPasswordCorrect] = useState(true);
  const [isConfirmPasswordCorrect, setisConfirmPasswordCorrect] =
    useState(true);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const registerHandler = () => {
    if (name === null || name.length === 0) {
      setIsNameCorrect(false);
      return;
    }

    if (email === null || email.length === 0) {
      setIsEmailCorrect(false);
      return;
    }

    if (password === null || password.length === 0) {
      setisPasswordCorrect(false);
      return;
    }

    if (confirmPassword === null || confirmPassword.length === 0) {
      setisConfirmPasswordCorrect(false);
      return;
    }

    if (password === confirmPassword) {
      setisPasswordCorrect(true);
      setisConfirmPasswordCorrect(true);
    }

    axios({
      method: "POST",
      data: {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
      url: url,
    })
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        const errorName = err.response.data.name;

        switch (errorName) {
          case "EMAIL_ERROR": {
            setIsEmailCorrect(false);
            return;
          }
          case "PASSWORD_MATCH_ERROR": {
            setisPasswordCorrect(false);
            setisConfirmPasswordCorrect(false);
            return;
          }
        }
      });
  };

  return (
    <>
      <Input
        configuration={{
          type: "text",
          text: "Name",
          isCorrect: isNameCorrect,
          errorMessage: "Missing input field.",
        }}
        inputHandler={(e) => {
          setName(e);

          if (e.length > 0) {
            setIsNameCorrect(true);
          } else {
            setIsNameCorrect(false);
          }
        }}
      />
      <Input
        configuration={{
          type: "email",
          text: "E-Mail",
          isCorrect: isEmailCorrect,
          errorMessage: "Missing input field or E-Mail is already in use.",
        }}
        inputHandler={(e) => {
          setEmail(e);
          if (e.length === 0) {
            setIsEmailCorrect(false);
          } else {
            setIsEmailCorrect(true);
          }
        }}
      />
      <Input
        configuration={{
          type: "password",
          text: "Password",
          isCorrect: isPasswordCorrect,
          errorMessage: "Missing input field or passwords do not match",
        }}
        inputHandler={(e) => {
          setPassword(e);

          if (e.length === 0) {
            setisPasswordCorrect(false);
          } else {
            setisPasswordCorrect(true);
          }
        }}
      />
      <Input
        configuration={{
          type: "password",
          text: "Confirm Password",
          isCorrect: isConfirmPasswordCorrect,
          errorMessage: "Missing input field or passwords do not match.",
        }}
        inputHandler={(e) => {
          setConfirmPassword(e);

          if (e.length === 0 || e !== password) {
            setisConfirmPasswordCorrect(false);
          } else {
            setisConfirmPasswordCorrect(true);
          }
        }}
      />
      <div className="login-register-btn-container">
        <button className="login-btn" onClick={registerHandler}>
          Register
        </button>
        <Link to={"/login"}>
          <button className="register-btn">Sign In</button>
        </Link>
      </div>
    </>
  );
}

export default Register;
