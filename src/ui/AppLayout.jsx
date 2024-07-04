import Header from "./Header";
import Hero from "./Hero";

import CoinItem from "./CoinItem";

function AppLayout() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <div className=" px-4 py-4">
        <div className=" max-w-7xl mx-auto">
          <p className="text-white text-xl font-semibold py-6">Crypto Prices</p>
          <div>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-2 py-2 rounded-t-lg text-white font-semibold text-lg">
              coin
            </div>
            <CoinItem />
            <CoinItem />
            <CoinItem />
            <CoinItem />
            <CoinItem />
            <CoinItem />
            <CoinItem />
            <CoinItem />
            <CoinItem />
            <CoinItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
