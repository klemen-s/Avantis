import "./Orders.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const getUrl = "http://localhost:8000/get-orders";
    const userId = localStorage.getItem("userId");

    const response = await axios.post(getUrl, { userId: userId });
    const dbOrders = response.data.orders;

    setOrders(dbOrders);
  }

  useEffect(() => {
    getOrders();
    console.log(orders);
  }, []);

  return <div>Orders</div>;
}

export default Orders;
