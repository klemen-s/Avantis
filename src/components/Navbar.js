import "./Navbar.css";

import shoppingCartIcon from "../assets/shopping-cart.png";
import navbarButtonIcon from "../assets/navbar-button.png";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSidebarActive, setisSidebarActive] = useState(false);

  const clickHandler = () => setisSidebarActive(!isSidebarActive);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-buttons-wrapper">
          <div className="navbar-image-wrapper">
            <Link to={"/cart"}>
              <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
            </Link>
          </div>
          <div className="navbar-image-wrapper" onClick={clickHandler}>
            <img src={navbarButtonIcon} alt="Menu Button Icon" />
          </div>
        </div>
      </div>
      <Sidebar
        params={{
          isSidebarActive: isSidebarActive,
          clickHandler: clickHandler,
        }}
      />
    </div>
  );
}

export default Navbar;
