import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo }) {
  const user = useContext(LoginContext);
  let isLoggedIn = user.isLoggedIn;


  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;
