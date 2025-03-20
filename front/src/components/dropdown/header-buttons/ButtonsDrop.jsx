import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ButtonsDrop.css";
import { useNavigate } from "react-router-dom";

function UserDrop({ isOpen, position, content }) {
  const navigate = useNavigate();
  const [leftPosition, setLeftPosition] = useState();
  useEffect(() => {
    if (position.left > 1350) {
      setLeftPosition(1300);
    }
    if (position.left < 1350) {
      setLeftPosition(position.left);
    }
  }, [position]);
  return (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
      transition={{ duration: 0.3 }}
      style={{
        top: `${position.top + 10}px`,
        left: `${leftPosition}px`,
        position: "absolute",
      }}
    >
      {content.map((item, index) => (
        <button
          key={index}
          onClick={() =>
            navigate(`/${item.toLowerCase().replace(/\s+/g, "-")}`)
          }
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}

export default UserDrop;
