import React from "react";
import "./ProductCard.css";
import urun from "../../../assets/urun.png";
function ProductCard() {
  return (
    <div className="product-card-main">
      <div className="product-card-content">
        <img src={urun} alt="" />
        <div className="product-card-text">
          <div className="product-card-text-row">
            <span className="product-card-title">Ürün Adı</span>
            <span className="product-card-price">₺ 100</span>
          </div>
          <div className="product-card-text-row">
            <span className="product-card-title">Ürün Adı</span>
            <span className="product-card-price">₺ 100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
