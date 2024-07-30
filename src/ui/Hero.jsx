import { useRef } from "react";
import img from "../assets/seaBlue.png";
import { motion, useScroll, useTransform } from "framer-motion";
function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "3000deg"]);
  /* function useParallax(value, distance) {
    return 
  } */

  const y = useTransform(scrollYProgress, [0, 1], [-3500, 500]);
  return (
    <div className="  md:pt-14 ">
      <div className=" mx-6 flex  flex-col items-center text-white overflow-hidden ">
        <motion.img
          ref={targetRef}
          style={{ y, rotate }}
          src={img}
          alt="coin"
          className="w-5 h-5  left-6 top-16 absolute  z-20"
        />
        {/* <motion.img
          ref={targetRef}
          style={{ y, rotate }}
          src={img}
          alt="coin"
          className="w-10 h-10  left-24 top-60 absolute  z-20"
        />
        <motion.img
          ref={targetRef}
          style={{ y, rotate }}
          src={img}
          alt="coin"
          className="w-10 h-10  right-6 top-44 absolute  z-20"
        /> */}

        <div className="flex flex-col  gap-4 md:gap-10 items-center  py-10 md:py-16 w-60 md:w-[650px] z-30">
          {/* <div className="bg-blue-500 blur-[70px]   w-[200px] h-[80px] relative "></div> */}
          <p
            className=" w-[200px] md:w-[650px] md:py-5 md:filter-none top-8 text-center font-bold text-3xl md:text-[96px] md:leading-[110px]  blur-custom
    "
          >
            Crypto taxes done right
          </p>

          <p className=" text-center text-sm md:text-lg md:w-[380px] font-semibold  px-2">
            Connect your crypto wallets and exchanges to get your optimized tax
            report in minutes.
          </p>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 md:px-9 md:py-5 md:text-xl rounded-md text-sm font-semibold text-white cursor-pointer">
            <a href="#market">Get started for free</a>
          </button>
        </div>
        <div className=" flex flex-col gap-4 items-center w-60 md:w-full  pb-6 md:pb-0">
          <p
            className=" text-center font-semibold text-sm md:text-lg
    "
          >
            The official crypto tax partner of
          </p>
          <div className="flex flex-wrap justify-center items-end gap-6 md:gap-14 md:pb-5 z-30">
            <div className="text-blue-600 md:text-white font-bold text-xl md:text-3xl md:font-semibold">
              coinbase
            </div>
            <div className="text-[#ff007a] md:text-white flex items-center md:text-2xl">
              <div
                className={`bg-uni md:bg-uniWhite bg-no-repeat bg-cover w-6 h-6 md:w-8 md:h-8`}
              ></div>
              UNISWAP
            </div>
            <div className="flex items-center gap-1 md:text-2xl md:font-semibold">
              <div
                className={`bg-sea md:bg-seaWhite bg-no-repeat bg-cover w-6 h-6 md:w-8 md:h-8`}
              ></div>
              OpenSea
            </div>
            <div className="flex items-center gap-1 md:text-2xl">
              <div
                className={`bg-turbo md:bg-turboWhite bg-no-repeat bg-cover w-6 h-6 md:w-8 md:h-8`}
              ></div>
              <div className="flex flex-col">
                {/* <div className=" text-[10px] absolute z-0">inTuiT</div> */}
                <div className=" font-semibold pt-[6px]">turbotax</div>
              </div>
            </div>
            <div className="flex items-center md:text-2xl md:font-semibold">
              <div
                className={`bg-green-500 md:bg-white bg-no-repeat bg-cover w-6 h-6 md:w-8 md:h-8`}
              ></div>
              H&R BLOCK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
