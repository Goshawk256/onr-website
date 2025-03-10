import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ProductCard from "../../components/card/productcard/ProductCard";
function Home() {
  return (
    <div className="home-main">
      <Header />
      <div className="home-content">
        <div className="slider-area"></div>
        <div className="product-area">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
