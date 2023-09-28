import "./Men.css";
import Product from "./Product";
import axios from "axios";

import { useEffect, useState } from "react";

function Men() {
  const [products, setProducts] = useState([]);

  const productsList = products.map((product) => {
    return <Product product={product} key={product.name} />;
  });

  useEffect(() => {
    axios("http://localhost:8000/get-products")
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
