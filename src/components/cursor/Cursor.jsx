import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <motion.div className="cursor" animate={{ x: position.x, y: position.y }} />
  );
};

export default Cursor;
