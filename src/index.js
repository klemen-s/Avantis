import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/Cart";
import Login from "./components/Login";
import WishList from "./components/WishList";
import Dashboard from "./components/Dashboard";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "cart", element: <Cart /> },
      { path: "men", element: <Men /> },
      { path: "women", element: <Women /> },
      { path: "login", element: <Login /> },
      { path: "wish-list", element: <WishList /> },
      { path: "product/:productId", element: <ProductDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
