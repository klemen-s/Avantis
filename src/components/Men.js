import "./Men.css";
import Product from "./Product";
import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Men() {
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
      params: { gender: "male" },
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

export default Men;
