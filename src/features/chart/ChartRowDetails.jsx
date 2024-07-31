function ChartRowDetails({ details }) {
  return (
    <div className="lg:flex  lg:justify-between lg:items-center max-w-7xl mx-auto">
      <div className=" flex  items-center gap-1 py-4">
        <img
          src={details.image?.small}
          className="  w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
        />
        <div className=" flex gap-3 items-end ">
          <p className=" text-2xl font-semibold">
            {details.symbol?.toUpperCase()} Price
            <span className="text-[#c9c9c9] text-xs px-2">
              {details.symbol?.toUpperCase()}
            </span>
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-3 lg:gap-6">
        <p className="text-2xl font-semibold lg:text-[#b3b3b3]">
          {details.market_data?.current_price.usd.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <div
          className={`text-white font-semibold text-sm lg:text-base  ${
            details.market_data?.price_change_percentage_24h > 0
              ? "bg-green-600"
              : "bg-red-600"
          } px-2 py-[2px] lg:py-1 lg:px-3 rounded-sm w-fit h-fit lg:mr-0`}
        >
          {details.market_data?.price_change_percentage_24h > 0 && "+"}
          {details.market_data?.price_change_percentage_24h.toFixed(2)}%
        </div>
      </div>
      <div>
        <div className="hidden lg:block text-2xl font-semibold text-[#b3b3b3]">
          {details.market_data?.market_cap.usd.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
    </div>
  );
}

export default ChartRowDetails;
