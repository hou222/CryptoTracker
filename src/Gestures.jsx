import { motion, MotionConfig } from "framer-motion";

function Gestures() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="example-button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 1.95,
            rotate: "3deg",
          }}
        >
          Click me!
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "red",
          }}
          className="example-button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 1.95,
            rotate: "-3deg",
          }}
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}

export default Gestures;
