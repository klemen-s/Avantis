import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Cart from "./components/Cart";
import Login from "./components/Login";
import WishList from "./components/WishList";
import ProductDetails from "./components/ProductDetails";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import App from "./components/App";
import RequireAuth from "./components/RequireAuth";
import Orders from "./components/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/wish-list", element: <WishList /> },
      { path: "/product/:productId", element: <ProductDetails /> },
      // {
      //   path: "/user-dashboard",
      //   element: (
      //     <RequireAuth redirectTo={"/login"}>
      //       <UserDashboard />
      //     </RequireAuth>
      //   ),
      // },
      {
        path: "/user-dashboard",
        element: <UserDashboard />, // while developing for easier access
      },
      { path: "/orders", element: <Orders /> },
      { path: "*", element: <Navigate to="/home" /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
