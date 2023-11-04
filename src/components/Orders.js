import "./Orders.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useOrder } from "../hooks/useOrder";

import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const getOrders = useOrder();

  const orderItems = orders.map((order) => {
    return <Order order={order} key={order._id} />;
  });

  useEffect(() => {
    async function getOrderData() {
      const ordersData = await getOrders();
      setOrders(ordersData);
    }

    getOrderData();
  }, []);

  return (
    <div className="order-items-wrapper">
      {orders.length !== 0 ? (
        { orderItems }
      ) : (
        <p className="orders">No Orders To Display</p>
      )}
    </div>
  );
}

export default Orders;
