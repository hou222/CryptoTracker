import Header from "./Header";
import Hero from "./Hero";

import CoinItem from "./CoinItem";
import Table from "./Table";

function AppLayout() {
  const tabelHeader = ["coin", "price", "24h %"];
  const tableData = [];
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <div className=" px-4 py-4">
        <div className=" max-w-7xl mx-auto">
          <p className="text-white text-xl font-semibold py-6 lg:text-4xl">
            Crypto Prices
          </p>
          <div className="rounded-t-lg overflow-hidden">
            <Table />
            <tr className="flex justify-between w-full bg-red-400 ">
              <div className="w-7 h-7 bg-white rounded-full text-center">1</div>
              <div className="w-7 h-7 bg-white rounded-full text-center">1</div>
              <div className="w-7 h-7 bg-white rounded-full text-center">1</div>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
