import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  const checkoutHandler = () => {
    console.log("Checkout");
  };

  return (
    <>
      <h1 className="cart-heading">Cart</h1>
      <div className="grey-line"></div>
      <div className="cart-items-container">
        <CartItem
          cartItem={{
            name: "Boots",
            id: "1",
            quantity: 2,
            price: 99.99,
            size: "L",
          }}
        />{" "}
        <CartItem
          cartItem={{
            name: "Boots",
            id: "1",
            quantity: 2,
            price: 99.99,
            size: "L",
          }}
        />{" "}
        <CartItem
          cartItem={{
            name: "Boots",
            id: "1",
            quantity: 2,
            price: 99.99,
            size: "L",
          }}
        />
      </div>
      <div className="checkout">
        <div className="total-spend">
          <p>Total:</p>
          <p>£{99.99 /* Add dynamic value of the sum of value of items */}</p>
        </div>
        <button onClick={checkoutHandler}>Checkout</button>
      </div>
    </>
  );
}

export default Cart;
