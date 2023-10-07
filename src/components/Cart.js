import "./Cart.css";
import CartItem from "./CartItem";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Cart() {
  const cart = useContext(CartContext);

  const cartItems = cart?.map((cartItem, i) => {
    return <CartItem cartItem={cartItem} key={i} />;
  });

  const totalPrice = cart?.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  const checkoutHandler = () => {
    console.log("Checkout");
  };

  return (
    <>
      <h1 className="cart-heading">Cart</h1>
      <div className="grey-line"></div>
      <div className="cart-items-container">{cartItems}</div>
      <div className="checkout">
        <div className="total-spend">
          <p>Total:</p>
          <p>£{totalPrice ? parseFloat(totalPrice).toFixed(2) : 0}</p>
        </div>
        <button onClick={checkoutHandler}>Checkout</button>
      </div>
    </>
  );
}

export default Cart;
