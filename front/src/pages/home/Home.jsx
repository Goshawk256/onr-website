import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ProductCard from "../../components/card/productcard/ProductCard";
import SliderComponent from "../../components/slider/SliderComponent";
import ProductArea from "../../components/productarea/ProductArea";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div className="home-main">
      <Header />
      <div className="home-content">
        <div className="slider-area">
          <SliderComponent />
        </div>

        <ProductArea />
        <div className="home-navigate-buttons">
          <button>Geri</button>1<button>İleri</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
