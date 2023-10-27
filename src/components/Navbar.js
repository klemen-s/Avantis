import "./Navbar.css";

import shoppingCartIcon from "../assets/shopping-cart.png";
import navbarButtonIcon from "../assets/navbar-button.png";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";

function Navbar({ cartItemsLength }) {
  const [isSidebarActive, setisSidebarActive] = useState(false);
  const [isHomePage, setisHomePage] = useState(true);

  let location = useLocation();

  const clickHandler = () => setisSidebarActive(!isSidebarActive);

  useEffect(() => {
    setisSidebarActive(false); // new page = close sidebar

    if (location.pathname === "/home") {
      setisHomePage(true);
    } else {
      setisHomePage(false);
    }
  }, [location]);

  return (
    <>
      <div className="navbar">
        {!isHomePage && (
          <h1 className="navbar-title">
            <Link to={"/home"}>AVANTIS</Link>
          </h1>
        )}
        <div className="navbar-buttons-wrapper">
          <div className="navbar-image-wrapper">
            <Link to={"/cart"}>
              <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
              <p className="cart-items-length">{cartItemsLength}</p>
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
    </>
  );
}

export default Navbar;
