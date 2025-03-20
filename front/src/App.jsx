import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import ProductInformation from "./pages/productinformation/ProductInformation";
import ScrollToTop from "./helpers/scrollhelper/ScrollHelper";
import CompanyLogin from "./pages/login/company-login/CompanyLogin";
import UserLogin from "./pages/login/user-login/UserLogin";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        x
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productinformation" element={<ProductInformation />} />
        <Route path="/bayi-girişi" element={<CompanyLogin />} />
        <Route path="/kullanıcı-girişi" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
