import Input from "./Input";
import "./Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  // API call for authentication
  // ...

  return (
    <div className="login-container">
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
        <button className="login-btn">Sign In</button>
        <Link to={"/dashboard/register"}>
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
