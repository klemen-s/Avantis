import Input from "./Input";
import "./Login.css";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginDispatchContext } from "../context/LoginContext";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const navigate = useNavigate();

  const dispatchUser = useContext(LoginDispatchContext);

  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const sendLoginRequest = useLogin();

  const loginHandler = async () => {
    if (emailInputValue.length === 0) {
      setIsEmailCorrect(false);
      setEmailErrorMessage("Fill out the missing field.");
      return;
    }
    setIsEmailCorrect(true);

    if (passwordInputValue.length === 0) {
      setIsPasswordCorrect(false);
      setPasswordErrorMessage("Fill out the missing field.");
      return;
    }
    setIsPasswordCorrect(true);

    const userData = await sendLoginRequest(
      emailInputValue,
      passwordInputValue
    );

    if (userData.isEmailCorrect === false) {
      setIsEmailCorrect(false);
      setEmailErrorMessage(userData.emailErrorMessage);
      return;
    }

    setIsEmailCorrect(true);
    setEmailErrorMessage("");

    if (userData.isPasswordCorrect === false) {
      setIsPasswordCorrect(false);
      setPasswordErrorMessage(userData.passwordErrorMessage);
      return;
    }

    setIsPasswordCorrect(true);
    setPasswordErrorMessage("");

    dispatchUser({
      type: "login",
      isLoggedIn: true,
      name: userData.name,
      userId: userData.userId,
    });

    navigate("/home");
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
        inputHandler={(input) => setEmailInputValue(input)}
      />
      <Input
        configuration={{
          type: "password",
          text: "Password",
          isCorrect: isPasswordCorrect,
          errorMessage: !isPasswordCorrect ? passwordErrorMessage : "",
        }}
        inputHandler={(input) => setPasswordInputValue(input)}
      />
      <div className="login-register-btn-container">
        <button className="login-btn" onClick={loginHandler}>
          Sign In
        </button>
        <Link to={"/register"}>
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </>
  );
}

export default Login;
