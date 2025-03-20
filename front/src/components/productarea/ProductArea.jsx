import React from "react";
import ProductCard from "../card/productcard/ProductCard";
import "./ProductArea.css";
function ProductArea() {
  return (
    <div className="product-area">
      {Array.from({ length: 32 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}

export default ProductArea;
