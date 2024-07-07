import Header from "./Header";
import Hero from "./Hero";
import coin from "../assets/turbo.png";
import CoinItem from "./CoinItem";

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
            <table className=" w-full ">
              <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white  text-lg ">
                <tr className="">
                  <th className="font-semibold py-2">coin</th>
                  <th className="font-semibold w-24">price</th>
                  <th className="font-semibold w-20 ">24h %</th>

                  {/* <div className="flex bg-red-400">
                  <th>price</th>
                  <th>24h %</th>
                </div> */}
                </tr>
              </thead>
              <tbody>
                <tr className="p-2  border-b bg-yellow-400">
                  <td className="flex py-2 items-center gap-3">
                    <img src={coin} alt="coin" className="w-7 h-7" />
                    <p className="text-white text-lg ">Bitcoin</p>
                  </td>
                  {/* <div className="flex  items-end justify-center gap-1 bg-green-500"> */}
                  <td className="font-semibold py-2 w-24 text-center text-white">
                    $69,423.04
                  </td>
                  <td className="w-20 py-2">
                    <div className="text-white font-semibold text-sm bg-red-600 px-2 py-[2px] rounded-sm w-fit mx-auto">
                      -3.28%
                    </div>
                  </td>
                  {/* </div> */}
                </tr>
              </tbody>
              {/* <CoinItem /> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
