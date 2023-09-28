import "./Product.css";

function Product({ product }) {
  return (
    <div className="product">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={product.imageUrl}
          alt="Product Name"
        />
      </div>
      <div className="product-lower">
        <div className="product-lower-info">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
