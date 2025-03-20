import React from "react";
import { motion } from "framer-motion";
import "./CartDrop.css";

function CardDrop({ isOpen }) {
  if (!isOpen) return null; // Eğer açık değilse bileşeni hiç render etme

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
        width: "300px",
      }}
    >
      <div>Sepetiniz boş</div>
    </motion.div>
  );
}

export default CardDrop;
