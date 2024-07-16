import Header from "./Header";
import Hero from "./Hero";

import CryptoPrices from "./CryptoPrices";

function AppLayout() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <div className=" px-4 py-4 ">
        <CryptoPrices />
        <div className="flex flex-col justify-start items-center py-20">
          <p className="text-white text-center text-6xl font-semibold flex flex-col">
            OUR
            <span className="bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer text-transparent bg-clip-text">
              PICING
            </span>
          </p>
          <p className="text-white text-center">
            Whether your time-saving automation needs are large or small, we’re
            here to help you scale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
