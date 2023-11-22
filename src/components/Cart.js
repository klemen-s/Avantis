import "./Cart.css";
import CartItem from "./CartItem";

import { CartContext, CartDispatchContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

import axios from "axios";

function Cart() {
  const cart = useContext(CartContext);
  const cartDispatch = useContext(CartDispatchContext);
  const user = useContext(LoginContext);

  const navigate = useNavigate();

  const [cartError, setCartError] = useState(false);

  const cartItems = cart?.map((cartItem, i) => {
    return <CartItem cartItem={cartItem} key={i} />;
  });

  const totalPrice = cart?.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  const checkoutHandler = () => {
    if (!user.isLoggedIn) {
      navigate("/login");
      return;
    }
    if (cart.length === 0) {
      setCartError(true);
      return;
    }

    setCartError(false);

    // create new order
    const userId = localStorage.getItem("userId");
    // const postUrl = "http://localhost:8000/post-order";
    const postUrl = process.env.REACT_APP_SERVER_URL + "post-order";
    axios.post(postUrl, { userId: userId, orderItems: cart });
    cartDispatch({ type: "checkout" });

    navigate("/user-dashboard");
  };

  return (
    <>
      <div className="cart-wrapper">
        <h1 className="cart-heading">Cart</h1>
        <div className="cart-items-container">{cartItems}</div>
        <div className="checkout">
          <div className="total-spend">
            <p>Total:</p>
            <p>£{totalPrice ? parseFloat(totalPrice).toFixed(2) : 0}</p>
          </div>
          <div className="checkout-btn-wrapper">
            <button className="checkout-btn" onClick={checkoutHandler}>
              Checkout
            </button>
          </div>
          {cartError && <div className="cart-error">No items in cart.</div>}
        </div>
      </div>
    </>
  );
}

export default Cart;
