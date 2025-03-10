import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ProductCard from "../../components/card/productcard/ProductCard";
import SliderComponent from "../../components/slider/SliderComponent"; // Yeni eklenen slider

function Home() {
  return (
    <div className="home-main">
      <Header />
      <div className="home-content">
        <div className="slider-area">
          <SliderComponent />
        </div>

        <div className="product-area">
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
