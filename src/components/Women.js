import "./Women.css";
import Product from "./Product";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Women() {
  const [products, setProducts] = useState([]);

  const productsList = products.map((product) => {
    return (
      <Link to={"/product/" + product._id} key={product._id}>
        <Product product={product}></Product>
      </Link>
    );
  });

  useEffect(() => {
    axios({
      // url: "http://localhost:8000/get-products",
      url: process.env.REACT_APP_SERVER_URL + "get-products",
      params: { gender: "woman" },
    })
      .then((res) => {
        const dbProducts = res.data.products;
        setProducts(dbProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{productsList}</>;
}

export default Women;
