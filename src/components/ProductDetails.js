import "./ProductDetails.css";

import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartDispatchContext } from "../context/CartContext";

import axios from "axios";

function ProductDetails() {
  let { productId } = useParams();

  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState(undefined);

  const dispatch = useContext(CartDispatchContext);

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

  const addToCartHandler = () => {
    if (selectedSize !== undefined) {
      const price = product.price.slice(1);

      dispatch({
        type: "added",
        product: {
          productName: product.name,
          size: selectedSize,
          quantity: 1,
          imageUrl: product.imageUrl,
          price: parseFloat(price).toFixed(2),
          id: product._id,
        },
      });
      setSelectedSize(undefined);
    }
  };

  const sizeHandler = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="product-details">
        <div className="product-detail-image-wrapper">
          <img
            className="product-detail-image"
            src={product.imageUrl}
            alt="Product"
          />
        </div>
        <div>
          <div className="product-detail-info">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          {product.sizes && (
            <div className="sizes-container">
              {product.sizes.map((size) => (
                <button
                  className={
                    size === selectedSize ? "size-btn active-btn" : "size-btn"
                  }
                  key={size}
                  onClick={() => sizeHandler(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          <button className="add-to-cart-btn" onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
