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
          <p className="text-white text-xl font-semibold py-6">Crypto Prices</p>
          <div className="rounded-t-lg overflow-hidden">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
