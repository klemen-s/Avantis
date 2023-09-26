import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="products-list">
          <Outlet />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Dashboard;
