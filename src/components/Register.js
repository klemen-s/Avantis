import "./Register.css";
import Input from "./Input";

import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Register() {
  const url = "http://localhost:8000/register";

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
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
          errorMessage: "Missing input field",
        }}
        inputHandler={(e) => {
          setPassword(e);

          if (e.length === 0 || e !== confirmPassword) {
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
