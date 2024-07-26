import { useState } from "react";
import CurrencyTable from "../features/currencies/CurrencyTable";

function CryptoPrices() {
  const [page, setPage] = useState(1);
  const totalPages = [1, 2, 3, 4, 5];
  return (
    <div className=" max-w-7xl mx-auto pb-5">
      <p
        className="text-white text-xl font-semibold py-6 lg:text-4xl"
        id="market"
      >
        Crypto Prices
      </p>
      <div className="rounded-t-lg overflow-hidden">
        <CurrencyTable page={page} />
        <div className="flex justify-center items-center gap-3 lg:gap-6 w-full py-5 lg:py-10">
          {totalPages.map((pageNum) => (
            <div
              key={pageNum}
              className={`w-7 h-7 lg:w-10 lg:h-10  rounded-full flex justify-center items-center ${
                page === pageNum
                  ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600"
                  : "bg-[#efefef] text-black"
              } cursor-pointer`}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </div>
          ))}
          {/* <div
            className="w-7 h-7 lg:w-10 lg:h-10 text-white rounded-full flex justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer"
            onClick={() => setPage((page) => page++)}
          >
            1
          </div>
          <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#efefef] rounded-full text-center flex justify-center items-center cursor-pointer">
            2
          </div>
          <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#efefef]  rounded-full text-center flex justify-center items-center cursor-pointer">
            3
          </div>
          <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#efefef]  rounded-full text-center flex justify-center items-center cursor-pointer">
            4
          </div>
          <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#efefef]  rounded-full text-center flex justify-center items-center cursor-pointer">
            5
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CryptoPrices;
