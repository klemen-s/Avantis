import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

import axios from "axios";

function ProductDetails() {
  let { productId } = useParams();

  //   const [sizes, setSizes] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios({
      url: "http://localhost:8000/get-product",
      params: { productId: productId },
    })
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="product-detail-image-wrapper">
        <img
          className="product-detail-image"
          src={product.imageUrl}
          alt="Product Image"
        />
      </div>
      <div className="product-detail-info">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
      {product.sizes && (
        <div className="sizes-container">
          {product.sizes.map((size) => (
            <button className="size-btn" key={size}>{size}</button>
          ))}
        </div>
      )}
      <button className="add-to-cart-btn">Add To Cart</button>
    </>
  );
}

export default ProductDetails;
