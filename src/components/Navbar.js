import "./Navbar.css";

import shoppingCartIcon from "../assets/shopping-cart.png";
import navbarButtonIcon from "../assets/navbar-button.png";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation, Outlet } from "react-router-dom";

function Navbar({ cartItemsLength }) {
  const [isSidebarActive, setisSidebarActive] = useState(false);
  const [isHomePage, setisHomePage] = useState(true);

  let location = useLocation();

  const clickHandler = () => setisSidebarActive(!isSidebarActive);

  useEffect(() => {
    setisSidebarActive(false); // new page = close sidebar

    if (location.pathname === "/") {
      setisHomePage(true);
    } else {
      setisHomePage(false);
    }
  }, [location]);

  return (
    <div>
      <div className="navbar">
        {!isHomePage && (
          <h1 className="navbar-title">
            <Link to={"/"}>AVANTIS</Link>
          </h1>
        )}
        <div
          className={
            !isHomePage ? "navbar-buttons-wrapper" : "navbar-buttons-wrapper home"
          }
        >
          {!isHomePage && (
            <div className="navbar-image-wrapper">
              <Link to={"/dashboard/cart"}>
                <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
                <p className="cart-items-length">{cartItemsLength}</p>
              </Link>
            </div>
          )}
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
