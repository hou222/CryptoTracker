import img from "../../assets/seaBlue.png";
import binance from "../../assets/binance.png";
import uniswap from "../../assets/uniswap.png";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import usdc from "../../assets/usdc.png";
import usdt from "../../assets/usdt.png";
import polygon from "../../assets/polygon.png";
import solana from "../../assets/solana.png";
import tron from "../../assets/tron.png";
import { motion } from "framer-motion";
function HeroMotion({ rotate, y }) {
  return (
    <>
      <motion.img
        style={{ rotate, y }}
        src={ethereum}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-48 left-14 md:top-7 md:left-24 lg:left-36  md:w-16 md:h-16 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={solana}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-32 left-0 md:top-40 md:w-12 md:h-12 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={tron}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-20 left-12 md:top-64 md:left-24 lg:left-32 md:w-11 md:h-11 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={usdt}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-18 left-0 md:top-[370px] md:w-12 md:h-12 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={usdc}
        alt="coin"
        className="w-[14px] h-[14px] absolute top-16 left-12 md:top-[480px] md:left-24 lg:left-36 md:w-12 md:h-12 z-20"
      />

      <motion.img
        style={{ rotate, y }}
        src={bitcoin}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-48 right-14 md:top-7 md:right-24 lg:right-36  md:w-12 md:h-12 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={polygon}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-32 right-0 md:top-40 md:w-16 md:h-16 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={img}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-20 right-12 md:top-64 md:right-24 lg:right-32 md:w-11 md:h-11 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={uniswap}
        alt="coin"
        className="w-[14px] h-[14px] absolute -top-18 right-0 md:top-[370px] md:w-12 md:h-12 z-20"
      />
      <motion.img
        style={{ rotate, y }}
        src={binance}
        alt="coin"
        className="w-[14px] h-[14px] absolute top-16 right-12 md:top-[480px] md:right-24 lg:right-36 md:w-12 md:h-12 z-20"
      />
    </>
  );
}

export default HeroMotion;
