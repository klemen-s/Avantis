import "./Women.css";
import Product from "./Product";
import { useState, useEffect } from "react";

import axios from "axios";


function Women() {
  const [products, setProducts] = useState([]);

  const productsList = products.map((product) => {
    return <Product product={product} key={product.name} />;
  });

  useEffect(() => {
    axios({
      url: "http://localhost:8000/get-products",
      params: { gender: "female" },
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
