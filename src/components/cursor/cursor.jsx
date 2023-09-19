import "./cursor.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [scaling, setScaling] = useState(false);

  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
      setScaling(true);
    };

    const mouseleave = () => {
      setScaling(false);
    };

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseleave", mouseleave);

    return () => {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseleave", mouseleave);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{
          x: largecircle.x - 32,
          y: largecircle.y - 32,
          transition: { type: "spring", mass: 3 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.9 : 1 }}
        >
        <motion.div
          animate={{
            scale: scaling ? 1 : 1,
        }}
          className="small_circle"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Cursor;
