import "./CartItem.css";
import bootImage from "../assets/black-leather-boots-2.jpg";
import iconX from "../assets/menu-x.png";

import { CartDispatchContext } from "../context/CartContext";
import { useContext } from "react";

function CartItem({ cartItem }) {
  const dispatch = useContext(CartDispatchContext);

  const removeHandler = () => {
    dispatch({type : "removed", product: cartItem})
  };

  return (
    <>
      <div className="cart-item">
        <div className="cart-item-image-wrapper">
          <img
            className="cart-item-image"
            src={cartItem.imageUrl}
            alt="Cart Item"
          />
        </div>
        <div className="cart-item-info">
          <h1>{cartItem.productName}</h1>
          <p>Size: {cartItem.size}</p>
          <p>Quantity: {cartItem.quantity}</p>
          <p>£{cartItem.price}</p>
        </div>
        <img
          className="remove-item"
          src={iconX}
          alt="Remove Item"
          onClick={removeHandler}
        />
      </div>
      <div className="grey-line"></div>
    </>
  );
}

export default CartItem;
