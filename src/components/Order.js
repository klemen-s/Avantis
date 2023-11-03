import "./Order.css";

function Order({ order }) {
  const total = order.orderItems.reduce((acc, current) => {
    return acc + parseFloat(current.price);
  }, 0);

  const orderItems = order.orderItems.map((item) => {
    return (
      <div className="order-item-info" key={Math.random()}>
        <div className="order-item-image-wrapper" >
          <img
            className="order-item-image"
            src={item.imageUrl}
            alt="Order Item"
          />
        </div>
        <div className="order-item-details">
          <p className="order-item-title">{item.productName}</p>
          <p className="order-item-price">£{item.price}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="order">
      <h1 className="order-id">
        Order ID: <span>{order._id}</span>
      </h1>
      <div className="order-items">{orderItems}</div>
      <div className="order-info">
        <p>Total: </p>
        <p>£{parseFloat(total).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Order;
