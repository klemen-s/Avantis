import "./Navbar.css";

import shoppingCartIcon from "../assets/shopping-cart.png";
import navbarButtonIcon from "../assets/navbar-button.png";
import menuX from "../assets/menu-x.png";
import hertIcon from "../assets/heart-emoji.png";
import userIcon from "../assets/user-icon.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSidebarActive, setisSidebarActive] = useState(false);

  const clickHandler = () => setisSidebarActive(!isSidebarActive);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-buttons-wrapper">
          <div className="navbar-image-wrapper">
            <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
          </div>
          <div className="navbar-image-wrapper" onClick={clickHandler}>
            <img src={navbarButtonIcon} alt="Menu Button Icon" />
          </div>
        </div>
      </div>
      <div className={isSidebarActive ? "sidebar" : "sidebar open"}>
        <div className="sidebar-upper">
          <h1>AVANTIS</h1>
          <div className="x-button-wrapper-button" onClick={clickHandler}>
            <img src={menuX} alt="Close Button" />
          </div>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-content-element-spacer">
            <p>
              <Link to={"/men"}>MEN</Link>
            </p>
            <div className="grey-line"></div>
          </div>
          <div className="sidebar-content-element-spacer">
            <p>
              <Link to={"/women"}>WOMEN</Link>
            </p>
            <div className="grey-line"></div>
          </div>
          <div className="sidebar-content-sign-in-wish-list">
            <div className="sidebar-content-element-spacer">
              <div className="user-icon-wrapper">
                <img src={userIcon} alt="User Icon" />
              </div>
              <p>
                <Link to={"/login"}>Sign In / Register</Link>
              </p>
            </div>
            <div className="sidebar-content-element-spacer">
              <div className="heart-icon-wrapper">
                <img src={hertIcon} alt="Heart Icon" />
              </div>
              <p id="heart-icon-text">
                <Link to={"/wish-list"}>Wish List</Link>
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
    </div>
  );
}

export default Navbar;
