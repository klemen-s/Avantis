import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default Dashboard;
