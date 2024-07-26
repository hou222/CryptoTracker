import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState();
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
              x: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
              x: 200,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              transition: [0, 0.25, 0.5, 0.95, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BasicsOfMotion;
