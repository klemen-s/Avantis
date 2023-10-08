import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "./Navbar";
import { CartContext, CartDispatchContext } from "../context/CartContext";
import { cartReducer } from "../reducers/cartReducer";
import { useReducer } from "react";

function Dashboard() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <div className="dashboard-container">
          <div className="container">
            <div className="products-list">
              <Outlet />
            </div>
          </div>
          <Navbar cartItemsLength={cart.length} />
        </div>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export default Dashboard;
