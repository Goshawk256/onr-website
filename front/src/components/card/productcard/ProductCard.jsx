import React from "react";
import "./ProductCard.css";
import urun from "../../../assets/urun.png";
function ProductCard() {
  return (
    <div className="product-card-main">
      <div className="product-card-content">
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <p>Hover me</p>
            </div>
            <div className="content">
              <p className="heading">Card Hover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
