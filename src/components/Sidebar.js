import "./Sidebar.css";
import menuX from "../assets/menu-x.png";
import hertIcon from "../assets/heart-emoji.png";
import userIcon from "../assets/user-icon.png";

import { Link, useLocation } from "react-router-dom";

function Sidebar({ params }) {

  return (
    <div className={params.isSidebarActive ? "sidebar open" : "sidebar"}>
      <div className="sidebar-upper">
        <h1>AVANTIS</h1>
        <div className="x-button-wrapper-button" onClick={params.clickHandler}>
          <img src={menuX} alt="Close Button" />
        </div>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-content-element-spacer">
          <p>
            <Link to={"/dashboard/men"}>MEN</Link>
          </p>
          <div className="grey-line"></div>
        </div>
        <div className="sidebar-content-element-spacer">
          <p>
            <Link to={"/dashboard/women"}>WOMEN</Link>
          </p>
          <div className="grey-line"></div>
        </div>
        <div className="sidebar-content-sign-in-wish-list">
          <div className="sidebar-content-element-spacer">
            <div className="user-icon-wrapper">
              <img src={userIcon} alt="User Icon" />
            </div>
            <p>
              <Link to={"/dashboard/login"}>Sign In / Register</Link>
            </p>
          </div>
          <div className="sidebar-content-element-spacer">
            <div className="heart-icon-wrapper">
              <img src={hertIcon} alt="Heart Icon" />
            </div>
            <p id="heart-icon-text">
              <Link to={"/dashboard/wish-list"}>Wish List</Link>
            </p>
          </div>
          <div className="grey-line"></div>
        </div>
        <div className="sidebar-content-footer">
          <p id="footer-text-one">Need Help?</p>
          <p className="sidebar-footer-time">
            Monday to Friday: 09:30 - 00:00 BST
          </p>
          <p className="sidebar-footer-time">
            Saturday and Sunday: 09:30 - 22:00 BST
          </p>
          <p id="footer-text-two">
            Email: <span>lorem@ipsum.test</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
