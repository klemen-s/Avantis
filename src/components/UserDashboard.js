import "./UserDashboard.css";
import { useNavigate } from "react-router-dom";
import { LoginDispatchContext } from "../context/LoginContext";
import { useContext } from "react";

function UserDashboard() {
  const navigate = useNavigate();
  const loginDispatch = useContext(LoginDispatchContext);

  const signOutHandler = () => {
    loginDispatch({ type: "logout" })
    navigate("/login");
  };

  return (
    <>
      <button onClick={signOutHandler}>Sign Out</button>
    </>
  );
}

export default UserDashboard;
