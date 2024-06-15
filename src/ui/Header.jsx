import { useState } from "react";
import logo from "../assets/logo.png";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <div className="">
      <div className="bg-black py-4 px-6 text-white flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <p className="text-[#0094FF] text-lg font-semibold">CoinWave</p>
        </div>
        <nav className="hidden">
          <ul>
            <li>Home</li>
            <li>Market</li>
            <li>Choose Us</li>
            <li>Join</li>
          </ul>
        </nav>
        <div className="flex gap-3 items-center">
          <button className="bg-[#0094FF] px-3 py-[6px] rounded-md text-xs font-semibold text-black cursor-pointer">
            Try if free
          </button>
          {isOpen ? (
            <button className=" " onClick={handleOpen}>
              <div className=" w-6 h-6 relative lg:hidden">
                <div className=" bg-white w-full h-[0.100rem] absolute top-0 bottom-0 my-auto rotate-45"></div>

                <div className=" bg-white w-full h-[0.100rem] absolute top-0 bottom-0 my-auto -rotate-45"></div>
              </div>
            </button>
          ) : (
            <button className=" " onClick={handleOpen}>
              <div className="flex flex-col gap-1.5 w-6 h-6 justify-center lg:hidden">
                <div className=" bg-white w-full h-[0.100rem]"></div>
                <div className=" bg-white w-1/2 h-[0.100rem]"></div>
                <div className=" bg-white w-full h-[0.100rem]"></div>
              </div>
            </button>
          )}
        </div>
      </div>

      <nav
        className={` bg-black text-[#B7B8BA] font-semibold text-xl transition-all ease-in-out duration-500 overflow-hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-10">
          <li>Home</li>
          <li>Market</li>
          <li>Choose Us</li>
          <li>Join</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
