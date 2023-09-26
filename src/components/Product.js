import "./Product.css";

import BlackLeatherBoot from "../assets/black-leather-boots-2.jpg";

function Product() {
  return (
    <div className="product">
      <div className="product-image-wrapper">
        <img className="product-image" src={BlackLeatherBoot} alt="Product Name" />
      </div>
          <div className="product-lower">
              <div className="product-lower-info">
                  <p>Product Name</p>
                  <p>Price</p>
              </div>
      </div>
    </div>
  );
}

export default Product;
