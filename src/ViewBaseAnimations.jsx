import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
function ViewBaseAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    console.log("Is in view ->", isInView);
  }, [isInView]);
  return (
    <>
      <div
        style={{
          height: "150vh",
        }}
      />
      <motion.div
        style={{ backgroundColor: "black", height: "100vh" }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "red" : "blue",
          transition: "1s background",
        }}
      />
    </>
  );
}

export default ViewBaseAnimations;
