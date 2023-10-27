import "./UserDashboard.css";
import { useNavigate, Link } from "react-router-dom";
import { LoginDispatchContext } from "../context/LoginContext";
import { useContext } from "react";

function UserDashboard() {
  const navigate = useNavigate();
  const loginDispatch = useContext(LoginDispatchContext);

  const signOutHandler = () => {
    loginDispatch({ type: "logout" });
    navigate("/login");
  };

  return (
    <>
      <div className="user-dashboard-btn">
        <Link to={"/orders"}>
          <div className="user-dashboard-btn orders-btn">Orders</div>
        </Link>
      </div>
      <div className="user-dashboard-btn">
        <button
          className="user-dashboard-btn sign-out-btn"
          onClick={signOutHandler}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

export default UserDashboard;
