import axios from "axios";

export function useOrder() {
  // const getUrl = "http://localhost:8000/get-orders";
  const getUrl = process.env.REACT_APP_SERVER_URL + "get-orders";

  async function getOrders() {
    const userId = localStorage.getItem("userId");

    const response = await axios.post(getUrl, { userId: userId });
    const dbOrders = response.data.orders;

    return dbOrders;
  }

  return getOrders;
}
