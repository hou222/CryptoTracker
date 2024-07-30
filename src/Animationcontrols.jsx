import { motion, useAnimationControls } from "framer-motion";
function Animationcontrols() {
  const controls = useAnimationControls();
  function handleClick() {
    controls.start("flip");
  }

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button className="example-button" onClick={handleClick}>
        Flip it!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
}

export default Animationcontrols;
