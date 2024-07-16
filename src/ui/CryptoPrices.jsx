import CurrencyTable from "../features/currencies/CurrencyTable";

function CryptoPrices() {
  return (
    <div className=" max-w-7xl mx-auto pb-5">
      <p className="text-white text-xl font-semibold py-6 lg:text-4xl">
        Crypto Prices
      </p>
      <div className="rounded-t-lg overflow-hidden">
        <CurrencyTable />
        <div className="flex justify-center items-center gap-3 lg:gap-6 w-full py-5 lg:py-10">
          <div className="w-7 h-7 lg:w-10 lg:h-10 text-white rounded-full flex justify-center items-center bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoPrices;
