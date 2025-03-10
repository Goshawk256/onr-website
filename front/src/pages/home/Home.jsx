import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ProductCard from "../../components/card/productcard/ProductCard";
import img1 from "../../assets/saat.jpeg";
import img2 from "../../assets/bayi.png";
import img3 from "../../assets/bayi2.png";
function Home() {
  return (
    <div className="home-main">
      <Header />
      <div className="home-content">
        <div className="slider-area">
          <div className="slider-content">Slider</div>
        </div>

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
