import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
      {
        path: "/user-dashboard",
        element: (
          <RequireAuth redirectTo={"/login"}>
            <UserDashboard />
          </RequireAuth>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
