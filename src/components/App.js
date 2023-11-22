import "./App.css";
import { useEffect, useReducer } from "react";

import { cartReducer } from "../reducers/cartReducer";
import { loginReducer } from "../reducers/loginReducer";
import { CartDispatchContext, CartContext } from "../context/CartContext";
import { LoginContext, LoginDispatchContext } from "../context/LoginContext";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  let location = useLocation();

  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [user, dispatchUser] = useReducer(loginReducer, {
    isLoggedIn: false,
    name: "",
  });

  useEffect(() => {
    dispatchUser({ type: "checkLogin" });
  }, []);

  return (
    <LoginContext.Provider value={user}>
      <LoginDispatchContext.Provider value={dispatchUser}>
        <CartContext.Provider value={cart}>
          <CartDispatchContext.Provider value={dispatchCart}>
            {location.pathname !== "/home" && (
              <div className="dashboard-container">
                <div className="container">
                  {location.pathname === "/men" && (
                    <h1 className="app-title">Men's Clothing Items</h1>
                  )}
                  {location.pathname === "/women" && (
                    <h1 className="app-title">Women's Clothing Items</h1>
                  )}
                  <div className="products-list">
                    <Outlet />
                  </div>
                </div>
                <Navbar cartItemsLength={cart.length} />
              </div>
            )}
            {location.pathname === "/home" && (
              <Home cartItemsLength={cart.length} />
            )}
          </CartDispatchContext.Provider>
        </CartContext.Provider>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
