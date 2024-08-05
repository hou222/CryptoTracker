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
        </div>
      </div>
    </div>
  );
}

export default CryptoPrices;
