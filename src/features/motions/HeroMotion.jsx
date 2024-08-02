import img from "../../assets/seaBlue.png";
import img2 from "../../assets/turbo.png";
import { motion } from "framer-motion";
function HeroMotion({ rotate, y }) {
  return (
    <>
      <motion.img
        style={{ y, rotate }}
        src={img}
        alt="coin"
        className="w-96 h-96 absolute top-60 left-3 lg:w-14 lg:h-14     z-20"
      />
      {/* <motion.img
        style={{ y, rotate }}
        src={img2}
        alt="coin"
        className="w-4 h-4 lg:w-12 lg:h-12  absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img}
        alt="coin"
        className="w-4 h-4   absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img}
        alt="coin"
        className="w-4 h-4 lg:w-14 lg:h-14 absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img2}
        alt="coin"
        className="w-4 h-4 lg:w-12 lg:h-12 absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img}
        alt="coin"
        className="w-4 h-4 lg:w-14 lg:h-14   absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img2}
        alt="coin"
        className="w-4 h-4 lg:w-12 lg:h-12  absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img}
        alt="coin"
        className="w-4 h-4   absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img}
        alt="coin"
        className="w-4 h-4 lg:w-14 lg:h-14 absolute  z-20"
      />
      <motion.img
        style={{ y, rotate }}
        src={img2}
        alt="coin"
        className="w-4 h-4 lg:w-12 lg:h-12 absolute  z-20"
      /> */}
    </>
  );
}

export default HeroMotion;
