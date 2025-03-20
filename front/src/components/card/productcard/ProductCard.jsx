import React from "react";
import "./ProductCard.css";
import urun from "../../../assets/urun.png";
function ProductCard() {
  return (
    <div className="product-card-main">
      <div className="product-card-content">
        <img src={urun} alt="" />
        <div className="product-card-text">
          <p>Ürün Adı</p>
          <p>Ürün Fiyatı</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
