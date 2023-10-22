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

  const registerHandler = () => {
    axios({
      method: "POST",
      data: {
        name: "Joe",
        email: "test@test.com",
        password: "123",
        confirmPassword: "123",
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
      />
      <Input
        configuration={{
          type: "email",
          text: "E-Mail",
          isCorrect: isEmailCorrect,
          errorMessage: "Missing input field or E-Mail is already in use.",
        }}
      />
      <Input
        configuration={{
          type: "password",
          text: "Password",
          isCorrect: isPasswordCorrect,
          errorMessage: "Missing input field",
        }}
      />
      <Input
        configuration={{
          type: "password",
          text: "Confirm Password",
          isCorrect: isConfirmPasswordCorrect,
          errorMessage: "Missing input field or passwords do not match.",
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
