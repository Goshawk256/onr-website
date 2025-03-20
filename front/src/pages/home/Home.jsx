import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ProductCard from "../../components/card/productcard/ProductCard";
import SliderComponent from "../../components/slider/SliderComponent";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div className="home-main">
      <Header />
      <div className="home-content">
        <div className="slider-area">
          <SliderComponent />
        </div>

        <div className="product-area">
          {Array.from({ length: 32 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
