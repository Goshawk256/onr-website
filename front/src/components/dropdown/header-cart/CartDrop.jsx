import React from "react";
import { motion } from "framer-motion";
import "./CartDrop.css";
import { useState, useEffect } from "react";

function CardDrop({ isOpen }) {
  if (!isOpen) return null;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      style={{
        top: `100px`,
        right: `0px`,
        position: "absolute",
        background: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        borderRadius: "8px",
        width: isMobile ? "100%" : "300px",
      }}
    >
      <div>Sepetiniz boş</div>
    </motion.div>
  );
}

export default CardDrop;
